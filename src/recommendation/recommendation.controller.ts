import { Controller, Get, Query } from '@nestjs/common';

import { RecommendationService } from './recommendation.service';
import { ListRecommendationDto } from './dto/list-recommendation.dto';
import { IData } from './interface/response-data.interface';


@Controller({
  version: 'prod',
  path: 'recommendation',
})
export class RecommendationController {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Get('seedDb')
  async seedDb() {
    return await this.recommendationService.seedDb();
  }
  
  @Get('data')
  async getData(
    @Query() listRecommendationDto: ListRecommendationDto,
  ) : Promise<IData> {
    return await this.recommendationService.getData(listRecommendationDto);
  }
}
