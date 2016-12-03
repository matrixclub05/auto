import {Injectable} from '@angular/core';
import {LoggedInData} from "./data-objects/LoggedInData";
import {LoginStrategies} from "./data-objects/LoginStategies";

@Injectable()
export class LoginServiceService {

  private _currentLoginStrategy: LoginStrategies = LoginStrategies.LocalStorageFlow;
  private _loginData:LoggedInData = null;

  constructor() {
    let loginKey:string = localStorage.getItem("siteLoginKey");
    if(loginKey)
    {
      this._loginData = new LoggedInData(loginKey)
    }
  }

  public tryLoginUser(emailOrUserName: string, password: string) {
    switch (this._currentLoginStrategy) {
      case LoginStrategies.LocalStorageFlow: {
        this.loginWithLocalStorage(emailOrUserName);
        break;
      }
      case LoginStrategies.NormalFlow: {
        break;
      }
    }
  }

  public logOut()
  {
    localStorage.setItem("siteLoginKey", null);
  }

  private loginWithLocalStorage(loginKey:string):void
  {
    localStorage.setItem("siteLoginKey", loginKey);
    this._loginData = new LoggedInData(loginKey);
  }

  public get isLoggedIn(): boolean
  {
    return this._loginData != null;
  }

  public get loginData():LoggedInData
  {
    return this._loginData;
  }
}
