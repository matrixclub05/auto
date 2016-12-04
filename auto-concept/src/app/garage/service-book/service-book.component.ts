import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {ServiceRow} from "../services/garage-data.service";
import {WindowRefference} from "../../global-services/WindowRefference";

@Component({
  selector: '[service-book]',
  templateUrl: './service-book.component.html',
  styleUrls: ['./service-book.component.scss']
})
export class ServiceBookComponent implements OnInit {

  @ViewChild('content') content:ElementRef;
  @Input() carServiceBook:Array<ServiceRow>;
  @Output() goBack = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.content.nativeElement.scrollIntoView(true);
  }

  protected backButtonHit()
  {
    this.goBack.emit(true);
  }
}
