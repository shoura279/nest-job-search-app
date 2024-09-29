import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true, discriminatorKey: 'type' })
export class JobSearcher {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  recoveryEmail: string;
  DOB: string;
  mobileNumber: string;
  status?: string;
  @Prop({ type: Boolean, default: false })
  isVerified?: boolean;
  readonly _id?: mongoose.Schema.Types.ObjectId;
}
export const jobSearcherSchema = SchemaFactory.createForClass(JobSearcher);
