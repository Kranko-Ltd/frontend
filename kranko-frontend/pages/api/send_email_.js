import React from "react";

export default async function handler(req, res) {
  const sgMail = require("@sendgrid/mail");

  const { email } = req.body;
  console.log(req.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const message = {
    to: email,
    from: "samuelmunguti61@gmail.com",
    subject: "Welcome to KrankoJobs",
    text: "Thanks for joining us.  You can now head to https://frontend-kranko.vercel.app/professional-dashboard and set up Your Profile",
  };
  console.log(message);
  await sgMail
    .send(message)
    .then((response) => res.status(200).json({ status: "Email Sent" }))
    .catch((error) => console.log(error.message));
}
// export const config = {
//   api: {
//     externalResolver: true,
//   },
// };
