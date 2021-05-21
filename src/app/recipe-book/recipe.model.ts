import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePathUrl: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    des: string,
    imgPath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = des;
    this.imagePathUrl = imgPath;
    this.ingredients = ingredients;
  }
}
