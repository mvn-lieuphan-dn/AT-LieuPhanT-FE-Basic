import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-day3';
  token = 1;
  ngOnInit() {
  }

  clickTab(e: any) {
    this.token = e;
  }

  getMessage(x: number) {
    this.token = x;
  }

}
