import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: './config/.env', isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost:27017/job-search-nest'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
