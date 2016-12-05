///<reference path="pages/shop/cars/cars.component.ts"/>
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/component/main.component";
import {ProfileComponent} from "./pages/profile/component/profile.component";
import {CarStoreComponent} from "./pages/profile/car-store/car-store.component";
import {StartComponent} from "./pages/profile/start/start.component";
import {AboutComponent} from "./pages/about/about.component";
import {PersonalComponent} from "./pages/profile/personal/personal.component";
import {ShopComponent} from "./pages/shop/shop.component";
import {ServiceComponent} from "./pages/service/service.component";
import {CarsComponent} from "./pages/shop/cars/cars.component";

const appRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: StartComponent
      },
      {
        path: 'car-store',
        component: CarStoreComponent
      },
      {
        path: 'personal',
        component: PersonalComponent
      }
    ]
  },

  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent,
    children: [
      {
        path: 'cars',
        component: CarsComponent
      }

    ]
  },
  { path: 'service', component: ServiceComponent },



];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

