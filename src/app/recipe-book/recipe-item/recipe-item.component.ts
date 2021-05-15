import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {
  @Input() recipe: { name: string; description: string; imagePathUrl: string };
  @Output('clickRecipe') clickRecipeEvent = new EventEmitter<void>();

  onClickRecipe() {
    this.clickRecipeEvent.emit();
  }
}
