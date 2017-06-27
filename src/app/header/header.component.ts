import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigateView = new EventEmitter<boolean>(); 

  onNavigate(view: string) {
  	if (view === 'recipes')
  	{
  		this.navigateView.emit(true);
  	} else {
  		this.navigateView.emit(false);
  	}
  }

  constructor() { }

  ngOnInit() {
  }

}
