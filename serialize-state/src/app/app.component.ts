import {Component} from '@angular/core';


@Component({
  selector: 'serialize-state-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor() {
  }
}
