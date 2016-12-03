import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RegistrationFlowComponent} from "../../registration/registrationFlow/registration-flow.component";
import {LoginServiceService} from "../../global-services/login-service.service";

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _modalService: NgbModal, private _loginService:LoginServiceService) {
  }

  ngOnInit() {
  }

  public openRegistrationModal(param: boolean) {
    let v = this._modalService.open(RegistrationFlowComponent);
    v.componentInstance.isLogin = param;
  }
}
