import { Component, OnInit, Input, Output, EventEmitter , OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit , OnChanges{
  @Input() isToken : number;
  @Output() onHandleIsToKen = new EventEmitter<number>();
  arrResult : any[] = [
    {
      token: 1,
      img: 'img4.jpg'
    },
    {
      token: 2,
      img: 'img6.jpg'
    },
    {
      token: 3,
      img: 'img1.jpg'
    },
    {
      token: 4,
      img: 'img5.jpg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.arrResult);
  }
  
  getIsToken() {// back 1
    this.isToken = 1;
    this.onHandleIsToKen.emit(this.isToken);
  }

  ngOnChanges( simpleChange : SimpleChanges) {
    console.log('on change :')
    console.log(this.isToken);
    console.log(simpleChange);
  }

  // SimpleChanges() {

  // }
  
}
