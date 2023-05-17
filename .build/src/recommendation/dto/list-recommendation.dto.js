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
exports.ListRecommendationDto = void 0;
const class_validator_1 = require("class-validator");
const recommendation_enum_1 = require("../enum/recommendation.enum");
class ListRecommendationDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(recommendation_enum_1.type_search),
    __metadata("design:type", String)
], ListRecommendationDto.prototype, "type_search", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(recommendation_enum_1.characteristics),
    __metadata("design:type", String)
], ListRecommendationDto.prototype, "characteristics", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(recommendation_enum_1.foods),
    __metadata("design:type", String)
], ListRecommendationDto.prototype, "foods", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(recommendation_enum_1.price),
    __metadata("design:type", String)
], ListRecommendationDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(recommendation_enum_1.type_food),
    __metadata("design:type", String)
], ListRecommendationDto.prototype, "type_food", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(recommendation_enum_1.content),
    __metadata("design:type", String)
], ListRecommendationDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(recommendation_enum_1.food_restrictions),
    __metadata("design:type", String)
], ListRecommendationDto.prototype, "food_restrictions", void 0);
exports.ListRecommendationDto = ListRecommendationDto;
//# sourceMappingURL=list-recommendation.dto.js.map