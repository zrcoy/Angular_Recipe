import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'this is simply a test',
      'https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d'
    ),
    new Recipe(
      'test recipe 2',
      'this is simply a test 2',
      'https://assets.bonappetit.com/photos/596a45787654ad34116652c3/1:1/w_578,c_limit/pounded-flank-steak-with-zucchini-salsa.jpg'
    ),
  ];
  @Output('clickRecipe') clickRecipeEvent = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onClickRecipe(recipe: Recipe) {
    this.clickRecipeEvent.emit(recipe);
  }
}
