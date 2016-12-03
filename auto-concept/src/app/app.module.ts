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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { ChatComponent } from './chat/chat.component';
import { GarageComponent } from './garage/moduleView/garage.component';
import {GarageModule} from "./garage/garage.module";
import {VehicleModelsComponent} from "./garage/vehicle-models/vehicle-models.component";
import {LeftNavComponent} from "./components/left-nav/left-nav.component";
import {RouterModule} from "@angular/router";
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ChatComponent,
    GarageComponent,
    VehicleModelsComponent,
    LeftNavComponent,
    MainComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RegistrationModule,
    GarageModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
