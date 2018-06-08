import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
	styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
	showMenu = false;

	@Input() inAside: boolean;
	@Input('user') user: object;

  constructor() { 
	}

  ngOnInit() {
	}
	
	toggleMenu() {
		this.showMenu = !this.showMenu
	}

}
