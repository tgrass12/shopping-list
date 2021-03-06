import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();

	constructor(private shoppingListService: ShoppingListService) {}

	private recipes: Recipe[] = [
	 {name: 'Sample Recipe',
	 imagePath: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
	 description: 'A preview of a recipe!',
	 ingredients: [
	  {name: 'Dough',
	   amount: 1
	  },
	  {name: 'Sauce',
	   amount: 5
	  },
	  {name: 'Cheese',
	   amount: 10
	  }]
	}];

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(id: number) {
		return this.recipes[id];
	}

	addIngredientsToCart(ingredients: Ingredient[]) {
			this.shoppingListService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	setRecipes(recipes: Recipe[]){
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, recipe: Recipe) {
		this.recipes[index] = recipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}