import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient[]>();
	ingredients: Ingredient[] = [
   	new Ingredient('Oats', 5),
   	new Ingredient('Bananas', 20)
   	];

   	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
   	}

      addIngredients(ingredients: Ingredient[]) {
         this.ingredients.push(...ingredients);
         this.ingredientsChanged.next(this.ingredients.slice());
      }
      
   	getIngredients() {
   		return this.ingredients.slice();
   	}
}