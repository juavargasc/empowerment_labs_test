"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const dynamodb_service_1 = require("./../common/model/dynamodb.service");
const recommendation_enum_1 = require("./enum/recommendation.enum");
let RecommendationService = class RecommendationService {
    constructor(dynamodbService, configService) {
        this.dynamodbService = dynamodbService;
        this.configService = configService;
    }
    async seedDb() {
        return this.dynamodbService.seed();
    }
    async getData(listRecommendationDto) {
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
        const { type_search: types } = listRecommendationDto;
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
            let aux_element = element;
            for (const prop in element) {
                aux_element[prop] = element[prop]['S'] ? element[prop]['S'] : element[prop];
            }
            return aux_element;
        })
            .filter((element) => {
            if (element.type == types || types == recommendation_enum_1.type_search.todo) {
                return 1;
            }
            return 0;
        })
            .sort((p1, p2) => p2.total - p1.total);
        if (map1.length == 0)
            return { status: 'success', message: 'No hay coincidencias para la busqueda', coincidence: map1 };
        return { status: 'success', message: 'Resultados de la busqueda', coincidence: map1 };
    }
};
RecommendationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dynamodb_service_1.DynamodbService, config_1.ConfigService])
], RecommendationService);
exports.RecommendationService = RecommendationService;
//# sourceMappingURL=recommendation.service.js.map