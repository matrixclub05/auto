import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: 'registration-flow.component.html',
  styleUrls: ['registration-flow.component.scss']
})
export class RegistrationFlowComponent{

  private RegistrationStatesEnum = RegistrationStates;
  private _currentRegistrationState:RegistrationStates = RegistrationStates.LOGIN;

  constructor(public _currentModal: NgbActiveModal) {}

  ngOnInit() {
  }

  protected cancel()
  {
    this._currentModal.dismiss('Cross click')
  }

  protected buttonClick()
  {
    this._currentModal.close('Close click');
  }

  protected changeRegistrationStateTo(state:RegistrationStates)
  {
    this._currentRegistrationState = state;
  }

}


enum RegistrationStates
{
  LOGIN, REGISTER
}