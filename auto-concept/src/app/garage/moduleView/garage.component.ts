import { Component, OnInit } from '@angular/core';
import {GarageDataService} from "../services/garage-data.service";

@Component({
  selector: 'app-garage',
  templateUrl: 'garage.component.html',
  styleUrls: ['garage.component.scss']
})
export class GarageComponent implements OnInit {

  constructor(private _garageDataService:GarageDataService)
  {

  }

  ngOnInit() {
  }

}
