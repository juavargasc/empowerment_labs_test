import { IsNotEmpty, IsEnum } from 'class-validator';
import { type_food, type_search, food_restrictions, foods, characteristics, price, content } from '../enum/recommendation.enum';

export class ListRecommendationDto {
  @IsNotEmpty()
  @IsEnum(type_search)
  type_search: string;

  @IsNotEmpty()
  @IsEnum(characteristics)
  readonly characteristics: string;

  @IsNotEmpty()
  @IsEnum(foods)
  readonly foods: string;

  @IsNotEmpty()
  @IsEnum(price)
  readonly price: string;

  @IsNotEmpty()
  @IsEnum(type_food)
  readonly type_food: string;

  @IsNotEmpty()
  @IsEnum(content)
  readonly content: string;

  @IsNotEmpty()
  @IsEnum(food_restrictions)
  readonly food_restrictions: string;
}
