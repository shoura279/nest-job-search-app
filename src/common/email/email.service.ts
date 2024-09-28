import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';
interface SendEmailArgs {
  to: string;
  subject: string;
  html: string;
}
// @Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tyousef262@gmail.com', // your email
        pass: 'itzz xbkn ohyz abda', // your email password or app password
      },
    });
  }
  async sendEmail({ to, subject, html }: SendEmailArgs) {
    await this.transporter.sendMail({ to, subject, html });
  }
}
