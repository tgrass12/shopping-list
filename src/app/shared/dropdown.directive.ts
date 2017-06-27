import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})

export class DropdownDirective {

	@HostBinding('class.open') isOpened: boolean = false;

	@HostListener('click') onclick(){
		this.isOpened = !this.isOpened;
	}

constructor(private elRef: ElementRef) {}

}