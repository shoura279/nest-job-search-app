import {
  BadGatewayException,
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { JobSearcher } from './entity';
import { JobSearcherRepository } from 'src/models/job-searcher/job-searcher.repository';
import { EmailService } from 'src/common/email/email.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private jobSearcherRepository: JobSearcherRepository,
    private emailService: EmailService,
    private jwtService: JwtService,
  ) {}

  async handleSignup(jobSearcher: JobSearcher) {
    const jobSearcherExist = await this.jobSearcherRepository.exist({
      email: jobSearcher.email,
    });
    if (jobSearcherExist) {
      throw new ConflictException('user already exist');
    }
    const createdUser = await this.jobSearcherRepository.create(jobSearcher);
    if (!createdUser) {
      throw new BadGatewayException('fail to create user');
    }
    // generate token
    const token = this.jwtService.sign(
      { email: jobSearcher.email },
      { secret: 'jwtSecret' },
    );
    // send email
    await this.emailService.sendEmail({
      to: jobSearcher.email,
      subject: 'verify account',
      html: `
      <p>
      to verify account click <a href='http://localhost:3000/job-searcher-auth/verify/${token}'>link</a>
      </p>
      `,
    });
    return createdUser;
  }

  async verifyAccount(token: string) {
    let decoded = {};
    try {
      decoded = this.jwtService.verify(token, { secret: 'jwtSecret' });
    } catch (error) {
      throw new BadRequestException('invalid token');
    }
    const updatedUser = await this.jobSearcherRepository.update(
      { email: decoded['email'] },
      { isVerified: true },
      { new: true },
    );

    if (!updatedUser) {
      throw new BadGatewayException('fail to update user');
    }
    return updatedUser;
  }
}
