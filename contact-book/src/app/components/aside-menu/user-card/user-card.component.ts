import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
	styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

	@Input() inAside: boolean;
	@Input('users') contacts: [object];
	@Input('user') user: object;

  constructor() { }

  ngOnInit() {
  }

}
