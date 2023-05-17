import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { DynamodbService } from './../common/model/dynamodb.service';
import { ListRecommendationDto } from './dto/list-recommendation.dto';
import { type_search } from './enum/recommendation.enum';
import { IData, ICoincidence } from './interface/response-data.interface';

@Injectable()
export class RecommendationService {
  constructor(private readonly dynamodbService: DynamodbService, private configService: ConfigService) {}

  async seedDb() : Promise<string> {
    return this.dynamodbService.seed();
  }

  async getData(listRecommendationDto: ListRecommendationDto) : Promise<IData> {
    const params = {
      ExpressionAttributeNames: {
        "#AT": "tags"
      },
      ExpressionAttributeValues: {
        ":a": {
          "S": listRecommendationDto.content
        },
        ":b": {
          "S": listRecommendationDto.food_restrictions
        },
        ":c": {
          "S": listRecommendationDto.type_food
        },
        ":d": {
          "S": listRecommendationDto.price
        },
        ":e": {
          "S": listRecommendationDto.foods
        },
        ":f": {
          "S": listRecommendationDto.characteristics
        }
      },
      FilterExpression: "contains(#AT, :a) OR contains(#AT, :b) OR contains(#AT, :c) OR contains(#AT, :d) OR contains(#AT, :e) OR contains(#AT, :f)",
      TableName: process.env.TABLE,
    };
    const {type_search: types} = listRecommendationDto;
    delete listRecommendationDto.type_search;
    const Items = await this.dynamodbService.scanTable(params);
    const map1 = Items.map((element) => {
      element.total = 0;
      for (const key in listRecommendationDto) {
        const search = listRecommendationDto[key];
        if (element.tags['S'].includes(search)) {
          element.total = element.total + 1;
        }
      }
      let aux_element:ICoincidence = element;
      for (const prop in element) {
        aux_element[prop] = element[prop]['S'] ? element[prop]['S'] : element[prop] 
      }
      return aux_element
    })
    .filter((element) => {
      if (element.type == types || types == type_search.todo) {
        return 1;  
      }
       return 0;
    })
    .sort((p1,p2) => p2.total - p1.total);

    if (map1.length == 0)
      return { status: 'success', message: 'No hay coincidencias para la busqueda', coincidence: map1 }

    return { status: 'success', message: 'Resultados de la busqueda', coincidence: map1 } 
  }
}
