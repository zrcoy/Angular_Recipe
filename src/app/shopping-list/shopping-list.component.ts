import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('banana', 10),
  ];

  constructor() {}

  onAddIngEvent(newIng: Ingredient) {
    this.ingredients.push(newIng);
  }
}
