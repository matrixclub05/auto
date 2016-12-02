import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GarageDataService} from "./services/garage-data.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [GarageDataService]
})
export class GarageModule { }
