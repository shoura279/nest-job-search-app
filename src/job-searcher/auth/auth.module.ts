import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MailModule } from 'src/common/email/email.module';
import { AuthFactoryService } from './factory';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/models/common/user.schema';
import {
  JobSearcher,
  jobSearcherSchema,
} from 'src/models/job-searcher/job-searcher.schema';
import { JobSearcherRepository } from 'src/models/job-searcher/job-searcher.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: userSchema,
        discriminators: [
          {
            name: JobSearcher.name,
            schema: jobSearcherSchema,
          },
        ],
      },
    ]),
    MailModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtService,
    JobSearcherRepository,
    AuthFactoryService,
  ],
})
export class AuthModule {}
