import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authController } from './auth.controller';
import { AuthFactoryService } from './factory';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/models/common/user.schema';
import { JobSearcher } from './entity';
import { jobSearcherSchema } from 'src/models/job-searcher/job-searcher.schema';
import { JobSearcherRepository } from 'src/models/job-searcher/job-searcher.repository';
import { EmailService } from 'src/common/email/email.service';
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
  ],
  controllers: [authController],
  providers: [
    AuthService,
    AuthFactoryService,
    JobSearcherRepository,
    EmailService,
    JwtService,
  ],
})
export class AuthModule {}
