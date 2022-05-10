import { MailAdapter, SendMailData } from "./mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "545b9e942dabbc",
      pass: "d294f3ba0d35cd"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Wendel Silva <wendel245.ws@gmail.com>",
            subject,
            html: body,
        })
    }
}