import { Injectable } from '@angular/core';
import {Trucks} from "../draftData/Trucks";
import {Snowmobiles} from "../draftData/Snowmobiles";
import {Quadrocycles} from "../draftData/Quadrocycles";
import {Motorcycles} from "../draftData/Motorcycles";
import {Cars} from "../draftData/Cars";
import {Service} from "../draftData/Service";
import {CarData} from "../../global-services/data-objects/CarData";

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

  protected parseTEMP()
  {
    let carEngineTypes = ['Дизельный', "Бензиновый", 'LPG'];
    let carEngineCapacity = ['2.0', "2.6", '1.8', '1.6', '2.0T', '2.6T', '3.0T'];
    let transmissionType = ['МКПП', "АКПП", 'РКПП', 'Вариатор'];
    var p = this._sections["Грузовики"];
    var out = {};
    for (var manufacturer in p) {
      for(var model in p[manufacturer])
      {
        if(!out[manufacturer])
        {
          out[manufacturer] = {};
        }
        if(!out[manufacturer][model])
        {
          out[manufacturer][model] = {};
        }

        let obj:IAccessory = <IAccessory>{};
        obj.engineCapacity = carEngineCapacity[Math.floor(Math.random() * carEngineCapacity.length)];
        obj.engineType = carEngineTypes[Math.floor(Math.random() * carEngineTypes.length)];
        obj.transmissionType = transmissionType[Math.floor(Math.random() * transmissionType.length)];
        out[manufacturer][model] = obj;
      }
    }

    debugger;
    return out;
  }

  public getVehicleAccesories(section:string, manufacturer:string, modelName:string):IAccessory
  {
    return <IAccessory>{};
  }
}

export interface IAccessory
{
  engineCapacity:string;
  engineType:string;
  transmissionType:string;
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


