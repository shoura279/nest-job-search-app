import * as nodemailer from 'nodemailer';
export class EmailService {
  private transporter: nodemailer.Transport;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ahmedshoura279@gmail.com',
        pass: 'igby vevg rpmz imwg',
      },
    });
  }
}
