import { Module } from '@nestjs/common';
import { RecommendationController } from './recommendation.controller';
import { RecommendationService } from './recommendation.service';
import { DynamodbService } from './../common/model/dynamodb.service';

@Module({
  controllers: [RecommendationController],
  providers: [RecommendationService, DynamodbService]
})
export class RecommendationModule {}
