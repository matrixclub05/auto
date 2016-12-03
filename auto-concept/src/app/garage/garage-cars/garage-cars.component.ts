import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../global-services/login-service.service";
import {CarData} from "../../global-services/data-objects/CarData";

@Component({
  selector: '[garage-cars]',
  templateUrl: './garage-cars.component.html',
  styleUrls: ['./garage-cars.component.scss']
})
export class GarageCarsComponent implements OnInit {

  private _carList:Array<CarData> = [];

  constructor(private _loginService:LoginServiceService) { }

  ngOnInit() {

  }

  protected getAndSaveGarageCars():Array<CarData>
  {
    this._carList = this._loginService.loginData.getUserData("garageCar").carList;
    return this._carList;
  }
}
