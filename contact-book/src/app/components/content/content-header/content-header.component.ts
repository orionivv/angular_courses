import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
	
	title: string;

  constructor(public router: Router) {
		router.events.subscribe(val => {
			if (val instanceof NavigationEnd) {
				if (val.url.length === 1) {
					this.title = 'Contact Book'
				}
				else if (val.url.indexOf('user')!=-1) {
					this.title = 'User'
				}
				else if (val.url.indexOf('new')!=-1) {
					this.title = 'Add user'
				}
				else return
			}
		})
	}

  ngOnInit() {
  }

}
