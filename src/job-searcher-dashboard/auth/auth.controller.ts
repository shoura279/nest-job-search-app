import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDTO } from './dto';
import { CreateResponse } from 'src/common/dto/response.dto';
import { JobSearcher } from 'src/models/job-searcher/job-searcher.schema';
import { AuthFactoryService } from './factory';

@Controller('job-searcher-auth')
export class authController {
  constructor(
    private authService: AuthService,
    private AuthFactoryService: AuthFactoryService,
  ) {}

  @Post('signup') // http://localhost:3000/job-searcher-auth/signup
  async signup(@Body() signupDTO: SignupDTO) {
    const createUserResponse = new CreateResponse<JobSearcher>();
    try {
      const JobSearcher = this.AuthFactoryService.createUser(signupDTO);
      const createdJobSearcher =
        await this.authService.handleSignup(JobSearcher);
      createUserResponse.success = true;
      createUserResponse.data = createdJobSearcher;
    } catch (error) {
      createUserResponse.success = false;
      throw error;
    }
    return createUserResponse;
  }
}
