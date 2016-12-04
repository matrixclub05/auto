import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-rollover-btn',
  templateUrl: './rollover-btn.component.html',
  styleUrls: ['./rollover-btn.component.scss']
})
export class RolloverBtnComponent implements OnInit {
  @Input() text: string;
  @Output() onClick: EventEmitter<string>;
  onBtnClick(){
    if(this.onClick){
      this.onClick.emit(this.text);
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
