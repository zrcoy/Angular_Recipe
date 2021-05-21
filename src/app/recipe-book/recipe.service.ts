import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Tomato spaghetti with eggs',
      'https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d',
      [
        new Ingredient('Tomato', 2),
        new Ingredient('Egg', 3),
        new Ingredient('Noddle Pack', 1),
      ]
    ),
    new Recipe(
      'Beef Salad',
      'Fresh salad with beef',
      'https://assets.bonappetit.com/photos/596a45787654ad34116652c3/1:1/w_578,c_limit/pounded-flank-steak-with-zucchini-salsa.jpg',
      [
        new Ingredient('Beef', 1),
        new Ingredient('Zucchini', 2),
        new Ingredient('Boi Choy', 1),
      ]
    ),
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  getRecipeCopy() {
    return this.recipes.slice();
  }
}
