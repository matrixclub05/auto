import {Routes, RouterModule} from "@angular/router";
import {ProfileComponent} from "./component/profile.component";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {ShopComponent} from "../../shop/shop.component";
import {CarStoreComponent} from "./car-store/car-store.component";
const ProfileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'car-store',
        component: CarStoreComponent

      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(ProfileRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule { }
