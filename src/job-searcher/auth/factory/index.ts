import * as bcrypt from 'bcrypt';
import { SignupDTO } from '../dto';
import { JobSearcher } from '../entity';

export class AuthFactoryService {
  createJobSearcher(signupDTO: SignupDTO) {
    const newJobSearcher = new JobSearcher();
    newJobSearcher.firstName = signupDTO.firstName;
    newJobSearcher.lastName = signupDTO.lastName;
    newJobSearcher.email = signupDTO.email;
    newJobSearcher.password = bcrypt.hashSync(signupDTO.password, 8);
    newJobSearcher.mobileNumber = signupDTO.mobileNumber;
    newJobSearcher.recoveryEmail = signupDTO.recoveryEmail;
    newJobSearcher.DOB = signupDTO.DOB;
    return newJobSearcher;
  }
}
