import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-details',
	templateUrl: './recipe-details.component.html',
	styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent {
	recipe: Recipe;
	id: number;

	constructor(private recipeService: RecipeService,
				private route: ActivatedRoute,
				private router: Router) {

	}

	editRecipe() {
      this.router.navigate(["edit"], {relativeTo: this.route});
  	}

  	deleteRecipe() {
  		this.recipeService.deleteRecipe(this.id);
  		this.router.navigate(["/recipes"]);
  	}

	ngOnInit() {
		this.route.params.subscribe (
			(params: Params ) => {
				this.id = +params['id'];
				this.recipe = this.recipeService.getRecipe(this.id);
			}
		);
	}
	sendToCart() {
		this.recipeService.addIngredientsToCart(this.recipe.ingredients);
	}
}