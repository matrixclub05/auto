import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ShopComponent } from './shop/shop.component';
import { RegistrationComponent } from './registration/moduleView/registration.component';
import { AppRoutingModule } from "./app-routing.module";
import {RegistrationModule} from "./registration/registration.module";

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RegistrationModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
