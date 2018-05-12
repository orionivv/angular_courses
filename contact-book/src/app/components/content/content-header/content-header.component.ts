import { Component, OnInit } from '@angular/core';
// import { NavigationEnd } from '@angular/router/src/events';
// import { Router } from '@angular/router/src/router';

@Component({
  selector: 'content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
	
	title: string;

  // constructor(public router: Router) {
	// 	router.events.subscribe((val) => {
	// 		console.log(val instanceof NavigationEnd);
	// 	})
	// }
	constructor () {

	}

  ngOnInit() {
		this.title = "Contact Book"
  }

}
