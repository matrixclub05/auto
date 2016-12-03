import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GarageDataService} from "./services/garage-data.service";
import { GarageCarsComponent } from './garage-cars/garage-cars.component';
import { ServiceBookComponent } from './service-book/service-book.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [GarageDataService]
})
export class GarageModule { }
