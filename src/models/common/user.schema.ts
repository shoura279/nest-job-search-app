import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { STATUS } from 'src/common/constants/status.constants';

@Schema({
  timestamps: true,
  discriminatorKey: 'type',
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class User {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true })
  recoveryEmail: string;

  @Prop({ type: String })
  DOB: string;

  @Prop({ type: String, required: true, unique: true, trim: true }) // 00210
  mobileNumber: string;

  @Prop({ type: String, enum: STATUS, default: STATUS.OFFLINE })
  status: string;

  readonly _id: mongoose.Schema.Types.ObjectId;
}
export const userSchema = SchemaFactory.createForClass(User);

userSchema.virtual('userName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});
