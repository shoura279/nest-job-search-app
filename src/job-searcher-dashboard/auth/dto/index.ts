import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  Matches,
} from 'class-validator';

export class SignupDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword() // A  a 12 @
  password: string;

  @IsString()
  @IsEmail()
  recoveryEmail: string;

  @IsString()
  @IsOptional()
  DOB: string;
  
  @IsString()
  @IsNotEmpty()
  @Matches(new RegExp(/^01[0-2,5]{1}[0-9]{8}$/))
  mobileNumber: string;

  status?: string;
}
