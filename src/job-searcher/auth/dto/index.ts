import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Matches,
} from 'class-validator';

export class SignupDTO {
  @IsString()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsEmail()
  recoveryEmail?: string;

  @IsString()
  DOB: string;

  @IsString()
  @Matches(new RegExp(/^01[0-2,5]{1}[0-9]{8}$/))
  mobileNumber: string;
}
