import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DynamodbService } from './common/model/dynamodb.service';
import { RecommendationModule } from './recommendation/recommendation.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), RecommendationModule],
  controllers: [AppController],
  providers: [AppService, DynamodbService],
})
export class AppModule {}
