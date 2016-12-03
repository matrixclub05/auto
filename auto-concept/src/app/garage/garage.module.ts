import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GarageDataService} from "./services/garage-data.service";
import { GarageCarsComponent } from './garage-cars/garage-cars.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [GarageDataService]
})
export class GarageModule { }
