import { RecommendationService } from './recommendation.service';
import { ListRecommendationDto } from './dto/list-recommendation.dto';
import { IData } from './interface/response-data.interface';
export declare class RecommendationController {
    private readonly recommendationService;
    constructor(recommendationService: RecommendationService);
    seedDb(): Promise<string>;
    getData(listRecommendationDto: ListRecommendationDto): Promise<IData>;
}
