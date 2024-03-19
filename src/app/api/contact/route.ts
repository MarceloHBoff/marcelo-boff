import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const subject = searchParams.get("subject");

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOption = {
    from: email ?? "",
    to: process.env.GMAIL_EMAIL,
    subject: `New Email from ${email}`,
    text: `${email} wrote:
      ${subject}
    `,
  };

  const response = await new Promise<string>((resolve, reject) => {
    transporter.sendMail(mailOption, (err) => {
      if (err) {
        reject(JSON.stringify(err));
      } else {
        resolve("success");
      }
    });
  });

  return NextResponse.json(response);
}
