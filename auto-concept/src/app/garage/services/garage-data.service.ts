import { Injectable } from '@angular/core';
import {Trucks} from "../draftData/Trucks";
import {Snowmobiles} from "../draftData/Snowmobiles";
import {Quadrocycles} from "../draftData/Quadrocycles";
import {Motorcycles} from "../draftData/Motorcycles";
import {Cars} from "../draftData/Cars";
import {Service} from "../draftData/Service";

@Injectable()
export class GarageDataService {

  private _sections:SectionsDictionary = {};
  private _serviceBook:Array<ServiceRow> = [];


  constructor()
  {
    this._sections["Автомобили"] = Cars.data;
    this._sections["Мотоциклы"] = Motorcycles.data;
    this._sections["Квадроциклы"] = Quadrocycles.data;
    this._sections["Снегоходы"] = Snowmobiles.data;
    this._sections["Грузовики"] = Trucks.data;

    this._serviceBook = Service.data;
  }

  public get serviceBook():Array<ServiceRow>
  {
    return this._serviceBook;
  }

  public get sectionList():Array<string>
  {
    return Object.keys(this._sections);
  }

  public getManufacturersBySection(section:string):Array<string>
  {
    let returnList:Array<string> = null;
    if(this._sections[section])
    {
      returnList = Object.keys(this._sections[section]);
    }
    return returnList;
  }

  public getVehiclesByManufacturer(section:string, manufacturer:string):Array<string>
  {
    let vehicles:Array<string> = null;
    if(this._sections[section])
    {
      if(this._sections[section][manufacturer])
      {
        vehicles = Object.keys(this._sections[section][manufacturer])
      }
    }
    return vehicles;
  }

  public getVehicleYears(section:string, manufacturer:string, modelName:string):Array<number>
  {
    let vehicleYear:Array<number> = null;
    if(this._sections[section])
    {
      if(this._sections[section][manufacturer])
      {
        if(this._sections[section][manufacturer][modelName])
        {
          vehicleYear = this._sections[section][manufacturer][modelName];
        }
      }
    }
    return vehicleYear;
  }
}

export interface ServiceRow
{
  description:string;
  done:boolean;
}

interface SectionsDictionary
{
  [sectionName:string]:ManufacturersAndModels;
}

interface ManufacturersAndModels
{
  [manufacturer:string]:ModelAndYears;
}

interface ModelAndYears
{
  [modeName:string]:Array<number>
}


