import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              public auth: AuthService) { }


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
