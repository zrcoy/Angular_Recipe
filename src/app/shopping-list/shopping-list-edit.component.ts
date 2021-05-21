import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    const name = this.nameInput.nativeElement.value;
    const amount = Number(this.amountInput.nativeElement.value);
    this.shoppingListService.addIng(new Ingredient(name, amount));
  }
}
