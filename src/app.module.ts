import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JobSearcherDashboardModule } from './job-searcher-dashboard/job-searcher-dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: './config/.env', isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost:27017/job-search-nest'),
    JobSearcherDashboardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
