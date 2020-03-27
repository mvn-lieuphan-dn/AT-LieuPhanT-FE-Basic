import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-day4';
  
  isClick = false;
  arrProducts = [
    {
      id: 1,
      img: '1.png',
      isToken: false,
      name: 'product1',
      detail: 'detail........',
      amount: 3
    },{
      id: 2,
      img: '2.jpg',
      isToken: false,
      name: 'product2',
      detail: 'detail........',
      amount: 5
    },{
      id: 3,
      img: '3.jpg',
      isToken: false,
      name: 'product3',
      detail: 'detail........',
      amount: 7
    },{
      id: 4,
      img: '4.jpg',
      isToken: false,
      name: 'product4',
      detail: 'detail........',
      amount: 9
    }
  ]
}
