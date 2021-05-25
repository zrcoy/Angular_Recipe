import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-book/recipe-item/recipe-detail.component';
import { RecipeStartInfoComponent } from './recipe-book/recipe-start-info/recipe-start-info.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes = [
  { path: '', redirectTo: '/recipe-book', pathMatch: 'full' },
  {
    path: 'recipe-book',
    component: RecipeBookComponent,
    children: [
      { path: '', component: RecipeStartInfoComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
