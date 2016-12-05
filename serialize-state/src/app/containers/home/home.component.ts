import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  private datas = {
    'a' : 1
  };
  constructor() {}
}
