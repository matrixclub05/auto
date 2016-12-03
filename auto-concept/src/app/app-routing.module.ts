import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GarageComponent} from "./garage/moduleView/garage.component";
import {VehicleModelsComponent} from "./garage/vehicle-models/vehicle-models.component";

const appRoutes: Routes = [
  { path: 'account', component: GarageComponent }
  //{ path: 'shop', component: ShopComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

