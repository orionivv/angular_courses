import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from 'src/app/components/content/contact-form/contact-form.component';
import { ContactViewComponent } from 'src/app/components/content/contact-view/contact-view.component';
import { ContactsComponent } from 'src/app/components/content/contacts/contacts.component';
// import { ContactsComponent } from 'src/app/components/content/contacts/contacts.component';

const routes: Routes = [
	{
		path: 'user',
		component: ContactViewComponent
	},
	{
		path: 'new-contact',
		component: ContactFormComponent
	},
	{
		path: '',
		component: ContactsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
