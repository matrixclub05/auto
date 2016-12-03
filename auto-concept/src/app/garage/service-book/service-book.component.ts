import {Component, OnInit, Input} from '@angular/core';
import {ServiceRow} from "../services/garage-data.service";

@Component({
  selector: '[service-book]',
  templateUrl: './service-book.component.html',
  styleUrls: ['./service-book.component.scss']
})
export class ServiceBookComponent implements OnInit {

  @Input() carServiceBook:Array<ServiceRow>;
  constructor() { }

  ngOnInit() {
  }

}
