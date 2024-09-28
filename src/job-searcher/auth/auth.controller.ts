import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDTO } from './dto';
import { CreateResponse } from 'src/common/dto/response.dto';
import { JobSearcher } from 'src/job-searcher/auth/entity/index';
import { AuthFactoryService } from './factory';

@Controller('job-searcher-auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private authFactoryService: AuthFactoryService,
  ) {}

  @Post('signup')
  async signup(@Body() signupDTO: SignupDTO) {
    const createUserResponse = new CreateResponse<JobSearcher>();
    try {
      const jobSearcher = this.authFactoryService.createJobSearcher(signupDTO);
      const createUser = await this.authService.handleSignup(jobSearcher);
      createUserResponse.success = true;
      createUserResponse.data = createUser;
    } catch (err) {
      createUserResponse.success = false;
      throw err;
    }
    return createUserResponse;
  }

  @Get('verify/:token')
  async verify(@Param() params: { token: string }) {
    let verifiedUser = {};
    try {
      verifiedUser = await this.authService.verifyAccount(params.token);
    } catch (error) {
      throw error;
    }
    return verifiedUser;
  }
}
