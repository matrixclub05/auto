import { Component, OnInit } from '@angular/core';
import {GarageDataService} from "../services/garage-data.service";
import {NgbTabChangeEvent} from "@ng-bootstrap/ng-bootstrap";
import {LoginServiceService} from "../../global-services/login-service.service";

@Component({
  selector: 'app-sign-up-for-service',
  templateUrl: './sign-up-for-service.component.html',
  styleUrls: ['./sign-up-for-service.component.scss']
})
export class SignUpForServiceComponent implements OnInit {

  protected _manufacturers:Array<string> = [];
  protected _vehicles:Array<string> = [];

  protected _selectedManufacturer:string = "";
  protected _selectedVehicle:string = "";

  constructor(private _garageDataService:GarageDataService, private _loginService:LoginServiceService)
  {

  }

  ngOnInit() {

    let userData = this._loginService.loginData.getUserData("garageCar");
    let selectedCar = userData.selectedCar;
    if(selectedCar)
    {
      this._selectedVehicle = selectedCar.model;
      this._selectedManufacturer = selectedCar.manufacturer;
    }
    this.getManufacturers();
  }

  protected getManufacturers()
  {
    this._manufacturers = this._garageDataService.getManufacturersBySection("Автомобили");
  }

  protected getVehiclesByManufacturer()
  {
    if(this._selectedManufacturer != "")
    {
      this._selectedVehicle = "";
      this._vehicles = this._garageDataService.getVehiclesByManufacturer("Автомобили", this._selectedManufacturer);
    }
  }

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'bar') {
      $event.preventDefault();
    }
  };

}
