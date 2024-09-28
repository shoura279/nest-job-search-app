import mongoose from 'mongoose';

export class JobSearcher {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  recoveryEmail?: string;
  DOB: string;
  mobileNumber: string;
  status?: string;
  isVerified: boolean;
  _id?: mongoose.Schema.Types.ObjectId;
}
