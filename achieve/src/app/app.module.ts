import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//custom components

import { NavbarAllComponent } from './navbar-always/navbarall.component';
import { HomepageComponent } from './homepage/homepage.component';

//custom components

@NgModule({
  declarations: [
    AppComponent,
    NavbarAllComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
