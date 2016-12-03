import {Component, OnInit, Input} from '@angular/core';
import {CarData} from "../../global-services/data-objects/CarData";

@Component({
  selector: '[app-garage-single-car]',
  templateUrl: 'garage-single-car.component.html',
  styleUrls: ['garage-single-car.component.scss']
})
export class GarageSingleCarComponent implements OnInit {

  @Input() _car:CarData;

  constructor() { }

  ngOnInit() {
  }

}
