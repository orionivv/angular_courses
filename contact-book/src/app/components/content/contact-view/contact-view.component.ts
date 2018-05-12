import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {

  // constructor(private route: ActivatedRoute) { }
	constructor() { }

  ngOnInit() {
		// console.log(this.route.queryParams);
  }

}
