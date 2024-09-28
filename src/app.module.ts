import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JobSearcherModule } from './job-searcher/job-searcher.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: './config/.env', isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost:27017/job-search-nest'),
    JobSearcherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
