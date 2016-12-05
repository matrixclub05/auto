import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/component/main.component";
import {ProfileComponent} from "./pages/profile/component/profile.component";
import {CarStoreComponent} from "./pages/profile/car-store/car-store.component";
import {StartComponent} from "./pages/profile/start/start.component";
import {AboutComponent} from "./pages/about/about.component";

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
      }
    ]
  },

  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

