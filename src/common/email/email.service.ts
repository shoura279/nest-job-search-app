import * as nodemailer from 'nodemailer';
export class EmailService {
  private transporter: nodemailer.Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ahmedshoura279@gmail.com',
        pass: 'igby vevg rpmz imwg',
      },
    });
  }

  async sendEmail({ to, subject, html }) {
    await this.transporter.sendMail({
      to,
      subject,
      html,
    });
  }
}
