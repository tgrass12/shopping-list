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
		new Recipe('Test Recipe',
		 'Just a test!',
		 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
		 [
		 	new Ingredient('Meat', 1),
		 	new Ingredient('Seasoning', 10)]),
		new Recipe('Test Recipe',
		 'Just a test!',
		 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
		 [
		 	new Ingredient('Meat', 1),
		 	new Ingredient('Seasoning', 10)])
		];

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

	updateRecipe(index: number, recipe: Recipe) {
		this.recipes[index] = recipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}