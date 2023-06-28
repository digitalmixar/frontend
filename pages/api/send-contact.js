import { z } from "zod";
import nodemailer from "nodemailer";
import fetch from "node-fetch";

const contactSchema = z.object({
  name: z.string(),
  phone: z.string().optional(),
  email: z.string().email(),
  message: z.string(),
  _recaptcha: z.string(),
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, email, message, _recaptcha } = contactSchema.parse(
      req.body
    );
    // Check recaptcha
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${_recaptcha}`,
      {
        method: "POST",
      }
    ).then((res) => res.json());

    if (!recaptchaResponse.success) {
      res.status(400).end("Invalid recaptcha");
      return;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_CONTACT_TO,
      subject: `Message from ${name} via your website`,
      text: `New contact message from ${name} via your website:\n\nemail: ${email}\nphone: ${phone}\n\n${message}`,
      replyTo: email,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).end("Error sending message");
      }
      console.log("Message sent: " + info.response);
      res.status(200).end("Message sent");
    });
  } else {
    // Reject any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
