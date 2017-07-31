import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
  			      private recipeService: RecipeService,
              private auth: AuthService) { }

  ngOnInit() {
  }

  saveData() {
  	this.dataStorageService.storeRecipes()
  	  .subscribe(
  		(response: Response) => {
  		  console.log(response);
  		}
  	  );
  }

  logOut() {
    this.auth.logout();
  }

  getData() {
  	this.dataStorageService.getRecipes();
  }
}
