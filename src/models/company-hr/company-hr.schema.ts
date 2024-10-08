import { Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true, discriminatorKey: 'type' })
export class CompanyHr {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  recoveryEmail: string;
  DOB: string;
  mobileNumber: string;
  status: string;
  readonly _id: mongoose.Schema.Types.ObjectId;
}
export const companyHrSchema = SchemaFactory.createForClass(CompanyHr);
