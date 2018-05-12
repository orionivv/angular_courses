import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
	@Input() categories: [string];
	 
  constructor() { }

  ngOnInit() {
  }

}
