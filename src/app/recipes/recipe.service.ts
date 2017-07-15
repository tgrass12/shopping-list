import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

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
}