import {Component, OnInit, Input} from '@angular/core';
import {GarageDataService} from "../services/garage-data.service";
import {Statement} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: '[vehicle-models]',
  templateUrl: './vehicle-models.component.html',
  styleUrls: ['./vehicle-models.component.scss']
})
export class VehicleModelsComponent implements OnInit {

  @Input() section:string;

  protected STATES = State;
  protected _currentState:State = State.Manufacturer;
  protected _data:Array<string> = [];

  protected _values:Array<string> = [];

  constructor(private _garageDataService:GarageDataService)
  {
    
  }

  ngOnInit()
  {
    this._values = [];
    this._values.push(this.section);
    this.updateData(this._values);
  }


  protected onManufacturerSelected(data:string)
  {
    this._values.push(data);
    
    this.gotoNextState();
    
    this.updateData(this._values);
  }

  protected updateData(values:Array<string>)
  {
    switch (this._currentState)
    {
      case State.Manufacturer:
        this._data = this._garageDataService.getManufacturersBySection(this._values[0]);
        break;
      case State.Vehicle:
        this._data = this._garageDataService.getVehiclesByManufacturer(this._values[0], this._values[1]);
        break;
      case State.Year:
        this._data = this._garageDataService.getVehicleYears(this._values[0], this._values[1], this._values[2]);
        break;
    }
  }
  
  protected gotoNextState():void
  {
    switch (this._currentState)
    {
      case State.Manufacturer:
        this._currentState = State.Vehicle;
        break;
      case State.Vehicle:
        this._currentState = State.Year;
        break;
    }
  }
}


enum State{
  Manufacturer,Vehicle,Year
}