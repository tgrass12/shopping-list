import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  subscription: Subscription;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) { }

  ngOnInit() {
  	this.subscription = this.route.params.subscribe(
  		(params: Params) => {
  			this.id = +params['id'];
  			this.editMode = params['id'] !== undefined;
        this.initForm();
  		}
  	);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount,
                [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
              )
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  addIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  exitEditMode() {
    this.router.navigate(["../"], {relativeTo: this.route});
  }
  
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onSubmit(){
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // );

    if (this.editMode)
    {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.exitEditMode();
  }
}
