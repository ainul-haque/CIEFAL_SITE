const { google } = require("googleapis");
const { sendOwnerNotification, sendStudentConfirmation } = require("./mailer");

exports.handleForm = async (req, res) => {
  const { name, email, phone, course, message } = req.body;

  try {
    console.log("KEY START:", process.env.GOOGLE_PRIVATE_KEY.slice(0, 50));

    if (
      !process.env.SHEET_ID ||
      !process.env.GOOGLE_SERVICE_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY
    ) {
      throw new Error(
        "Missing Google Sheets credentials in environment variables."
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY, // ✅ only works if real line breaks
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1!A1:F1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [name, email, phone, course, message, new Date().toLocaleString()],
        ],
      },
    });

    // ✅ Send Emails
    await sendOwnerNotification({ name, email, phone, course, message });
    await sendStudentConfirmation({ name, email, phone, course, message });

    console.log(
      "Google Sheets API response:",
      response.status,
      response.statusText
    );

    res.redirect("/thankyou");

  } catch (error) {
    console.error("Form submission failed:", error);
    res.status(500).send("There was an error: " + error.message);
  }
};

