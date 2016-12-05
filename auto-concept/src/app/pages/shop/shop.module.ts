import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars/cars.component';
import {Router, ActivatedRoute, Params} from "@angular/router";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarsComponent]
})
export class ShopModule { }
