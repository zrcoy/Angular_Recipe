import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('banana', 10),
  ];

  ingredientChangedEvent = new EventEmitter<Ingredient[]>();

  addIng(newIng: Ingredient, notifyChanges = true) {
    const index = this.ingredients.findIndex((ing) => {
      return ing.name === newIng.name;
    });
    if (index === -1) {
      this.ingredients.push(newIng);
    } else {
      this.ingredients[index].amount += newIng.amount;
    }
    if (notifyChanges) {
      this.ingredientChangedEvent.emit(this.ingredients.slice());
    }
  }

  getIngredientsCopy() {
    return this.ingredients.slice();
  }

  addIngs(newIngs: Ingredient[]) {
    newIngs.forEach((ing) => {
      this.addIng(ing, false);
    });
    this.ingredientChangedEvent.emit(this.ingredients.slice());
  }
}
