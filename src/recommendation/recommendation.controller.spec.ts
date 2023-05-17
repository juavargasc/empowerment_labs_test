import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { RecommendationController } from './recommendation.controller';
import { RecommendationService } from './recommendation.service';
import { DynamodbService } from './../common/model/dynamodb.service'
import { ListRecommendationDto } from './dto/list-recommendation.dto';
import { IData } from './interface/response-data.interface';

describe('RecommendationController', () => {
  let recommendationController: RecommendationController;
  
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RecommendationController],
      providers: [RecommendationService, DynamodbService, ConfigService],
    }).compile();

    recommendationController = app.get<RecommendationController>(RecommendationController);
  });

  describe('seed db', () => {
    it('should return "finish"', async () => {
      expect(await recommendationController.seedDb()).toBe('finish');
    });
  });

  describe("Get recommendation", () => {
    it("should get an array with recommendation", async () => {
        const requestQuery: ListRecommendationDto = {
          type_search: "todo",
          characteristics: "Entrega_a_domicilio",
          foods: "Desayuno",
          price: "Gama_media",
          type_food: "Sudamericana",
          content: "Ceviche",
          food_restrictions: "Apto_para_vegetarianos",
        };
        const responseData: IData = {
            status: "success",
            message: "Resultados de la busqueda",
            coincidence: expect.any([]),
        };

        const response = await recommendationController.getData(
          requestQuery
        );
        expect(response.message).toEqual(responseData.message);
    });
});

});
