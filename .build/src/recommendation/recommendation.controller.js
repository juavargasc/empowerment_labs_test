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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationController = void 0;
const common_1 = require("@nestjs/common");
const recommendation_service_1 = require("./recommendation.service");
const list_recommendation_dto_1 = require("./dto/list-recommendation.dto");
let RecommendationController = class RecommendationController {
    constructor(recommendationService) {
        this.recommendationService = recommendationService;
    }
    async seedDb() {
        return await this.recommendationService.seedDb();
    }
    async getData(listRecommendationDto) {
        return await this.recommendationService.getData(listRecommendationDto);
    }
};
__decorate([
    (0, common_1.Get)('seedDb'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecommendationController.prototype, "seedDb", null);
__decorate([
    (0, common_1.Get)('data'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_recommendation_dto_1.ListRecommendationDto]),
    __metadata("design:returntype", Promise)
], RecommendationController.prototype, "getData", null);
RecommendationController = __decorate([
    (0, common_1.Controller)({
        version: 'prod',
        path: 'recommendation',
    }),
    __metadata("design:paramtypes", [recommendation_service_1.RecommendationService])
], RecommendationController);
exports.RecommendationController = RecommendationController;
//# sourceMappingURL=recommendation.controller.js.map