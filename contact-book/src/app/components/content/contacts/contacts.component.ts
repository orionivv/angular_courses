import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
	contacts = [
		{
			name: 'Vlad',
			surname: 'Iliev'
		},
		{
			name: 'Vanya',
			surname: 'Gusev'
		},
		{
			name: 'Andy',
			surname: 'Warhol'
		},
		{
			name: 'Bogdan',
			surname: 'Shamne'
		},

	]
  constructor() { }

  ngOnInit() {
  }

}
