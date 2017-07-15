import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path:'recipes', 
    component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent},
      {path: ':id/edit', component: RecipeEditComponent}] },
  {path:'shopping-list',
    component: ShoppingListComponent ,
    children: [
      ]
  },
  {path: '', redirectTo: '/recipes', pathMatch: 'full' }
  ]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}