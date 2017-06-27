import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	isRecipes = true;

	setView(viewSelection: boolean) {
		this.isRecipes = viewSelection;
	}
}
