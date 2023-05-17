import { ConfigService } from '@nestjs/config';
import { DynamodbService } from './../common/model/dynamodb.service';
import { ListRecommendationDto } from './dto/list-recommendation.dto';
import { IData } from './interface/response-data.interface';
export declare class RecommendationService {
    private readonly dynamodbService;
    private configService;
    constructor(dynamodbService: DynamodbService, configService: ConfigService);
    seedDb(): Promise<string>;
    getData(listRecommendationDto: ListRecommendationDto): Promise<IData>;
}
