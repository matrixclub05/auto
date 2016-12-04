import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GarageDataService} from "./services/garage-data.service";
import {GarageComponent} from "./moduleView/garage.component";
import { CarsSelectorComponent } from './cars-selector/cars-selector.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [GarageDataService],
  entryComponents: [GarageComponent]
})
export class GarageModule { }
