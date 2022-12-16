import React from "react";

export default async function handler(req, res) {
  const sgMail = require("@sendgrid/mail");

  const {
    prof_email,
    prof_name,
    user_email,
    user_name,
    project_title,
    project_description,
    time_estimation,
    budget_explanation,
  } = req.body;
  console.log(req.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const message = {
    // to: prof_email,
    to: prof_email,
    from: "samuelmunguti61@gmail.com",
    subject: "Project Proposal",
    text: `Hello ${prof_name}!!\n
    Congratulations!!\n
    You have a new project proposal\n\n
    Details:\n
    client Name:${user_name}\n
    client Email:${user_email}\n
    Project Title:${project_title}\n
    Project Description:${project_description}\n
    Time Estimation:${time_estimation}\n
    Budget Explanation:${budget_explanation}\n\n

    Meet up with the client and agree on the nitty gritties of the project

    Head to https://frontend-kranko.vercel.app/professional-dashboard\n


    Best
    `,
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
