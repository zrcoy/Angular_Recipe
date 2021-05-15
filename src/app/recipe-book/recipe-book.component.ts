import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {
  currentSelectedRecipe: Recipe;

  constructor() {}

  ngOnInit(): void {}

  onShowingDetail(recipe: Recipe) {
    this.currentSelectedRecipe = recipe;
  }
}
