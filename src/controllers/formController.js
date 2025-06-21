const { GoogleSpreadsheet } = require("google-spreadsheet");

exports.handleForm = async (req, res) => {
  const { name, email, phone, course, message } = req.body;

  try {
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // first sheet

    await sheet.addRow({
      Name: name,
      Email: email,
      Phone: phone,
      Course: course,
      Message: message,
      Timestamp: new Date().toLocaleString(),
    });

    res.redirect("/thankyou");
  } catch (error) {
    console.error("Form submission failed:", error);
    res.send("There was an error. Please try again later.");
  }
};
