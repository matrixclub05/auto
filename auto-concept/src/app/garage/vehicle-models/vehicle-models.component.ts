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

  protected _manufacturers:Array<string> = [];
  protected _vehicles:Array<string> = [];
  protected _years:Array<number> = [];

  protected _selectedManufacturer:string = "";
  protected _selectedVehicle:string = "";
  protected _selectedYear:string = "";

  constructor(private _garageDataService:GarageDataService)
  {
    
  }

  ngOnInit()
  {
    this.getManufacturers();
  }

  protected getManufacturers()
  {
    this._selectedVehicle = "";
    this._selectedYear = "";
    this._manufacturers = this._garageDataService.getManufacturersBySection(this.section);
  }

  protected getVehiclesByManufacturer()
  {
    if(this._selectedManufacturer != "")
    {
      this._selectedVehicle = "";
      this._selectedYear = "";
      this._vehicles = this._garageDataService.getVehiclesByManufacturer(this.section, this._selectedManufacturer);
    }
  }

  protected getVehicleYears()
  {
    if(this._selectedManufacturer != "" && this._selectedVehicle != "")
      this._selectedYear = "";
      this._years = this._garageDataService.getVehicleYears(this.section, this._selectedManufacturer, this._selectedVehicle);
  }
}


enum State{
  Manufacturer,Vehicle,Year
}