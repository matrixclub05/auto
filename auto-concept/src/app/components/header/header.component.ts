import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RegistrationFlowComponent} from "../../registration/registrationFlow/registration-flow.component";

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _modalService:NgbModal) { }

  ngOnInit() {
  }
  public openRegistrationModal()
  {
    this._modalService.open(RegistrationFlowComponent);
  }
}
