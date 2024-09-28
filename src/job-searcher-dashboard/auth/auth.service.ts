import {
  BadGatewayException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { JobSearcher } from './entity';
import { JobSearcherRepository } from 'src/models/job-searcher/job-searcher.repository';

@Injectable()
export class AuthService {
  constructor(private jobSearcherRepository: JobSearcherRepository) {}

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
    return createdUser;
  }
}
