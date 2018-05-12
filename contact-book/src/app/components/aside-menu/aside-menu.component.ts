import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {
	myUser = {
		name:'Andy',
		surname:'Warhol'
	}
	categories = ['Family', 'Friends', 'Work']
  constructor() { }

  ngOnInit() {
  }

}
