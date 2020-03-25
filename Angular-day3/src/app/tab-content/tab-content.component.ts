import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {
  @Input() isToken : number;
  @Output() onHandleIsToKen = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  
  getIsToken() {// back 1
    this.isToken = 1;
    this.onHandleIsToKen.emit(this.isToken);
  }
  
}
