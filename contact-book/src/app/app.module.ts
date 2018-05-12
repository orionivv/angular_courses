import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { ContentComponent } from './components/content/content.component';
import { UserCardComponent } from './components/aside-menu/user-card/user-card.component';
import { SearchContactComponent } from './components/aside-menu/search-contact/search-contact.component';
import { SideMenuComponent } from './components/aside-menu/side-menu/side-menu.component';
import { NewContactComponent } from './components/aside-menu/new-contact/new-contact.component';
import { ContentHeaderComponent } from './components/content/content-header/content-header.component';
import { ContactFormComponent } from './components/content/contact-form/contact-form.component';
import { ContactViewComponent } from './components/content/contact-view/contact-view.component';
import { ContactsComponent } from './components/content/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideMenuComponent,
    ContentComponent,
    UserCardComponent,
    SearchContactComponent,
    SideMenuComponent,
    NewContactComponent,
    ContentHeaderComponent,
    ContactFormComponent,
    ContactViewComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
