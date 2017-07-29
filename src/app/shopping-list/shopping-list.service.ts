import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
   startedEditing = new Subject<number>();
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

      getIngredient(index: number) {
         return this.ingredients[index];
      }

      updateIngredient(index: number, updatedIngredient: Ingredient) {
         this.ingredients[index] = updatedIngredient;
         this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredient(index: number) {
         this.ingredients.splice(index, 1);
         this.ingredientsChanged.next(this.ingredients.slice());
      }
}