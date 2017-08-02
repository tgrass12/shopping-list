import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { RecipesRoutingModule } from './recipe-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
@NgModule({

	declarations: [
	  RecipesComponent,
	  RecipeDetailsComponent,
	  RecipeEditComponent,
	  RecipeListComponent,
	  RecipeStartComponent,
	  RecipeItemComponent
	],

	imports: [
	  CommonModule,
	  SharedModule,
	  ReactiveFormsModule,
	  RecipesRoutingModule
	] 
})

export class RecipesModule {}