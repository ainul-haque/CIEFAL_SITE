// CIEFAL/src/utils/mailer.js

const nodemailer = require("nodemailer");

// Create reusable transporter using OAuth2
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GMAIL_SENDER_EMAIL,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
  },
});

exports.sendOwnerNotification = async (formData) => {
  const mailOptions = {
    from: `"CIEFAL Bot" <${process.env.GMAIL_SENDER_EMAIL}>`,
    to: process.env.GMAIL_RECEIVER_EMAIL,
    subject: `📢 New Admission Enquiry - ${formData.name}`,
    text: `
Hey! A new student has filled the admission form.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course: ${formData.course}
Message: ${formData.message}
Timestamp: ${new Date().toLocaleString()}
    `,
  };

  await transporter.sendMail(mailOptions);
};

exports.sendStudentConfirmation = async (formData) => {
  const mailOptions = {
    from: `"CIEFAL Institute" <${process.env.GMAIL_SENDER_EMAIL}>`,
    to: formData.email,
    subject: `✅ Thank you for your admission enquiry!`,
    text: `
Hi ${formData.name},

Thank you for showing interest in ${formData.course} at CIEFAL.
Our team will get in touch with you soon to guide you further.

If you have any questions, reply to this email or call us.

Cheers,  
Team CIEFAL
    `,
  };

  await transporter.sendMail(mailOptions);
};
