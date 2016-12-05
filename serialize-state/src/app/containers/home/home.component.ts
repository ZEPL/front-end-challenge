import {Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  private datas = [
    {
      title: 'Radio1',
      name: 'radio1',
      value: '1',
      checked: true,
      nodeType: 'radio',
      children: [
        {
          title: 'checkbox1',
          name: 'checkbox1',
          value: '1',
          checked: false,
          nodeType: 'checkbox'
        },
        {
          title: 'checkbox2',
          name: 'checkbox2',
          value: '2',
          checked: false,
          nodeType: 'checkbox'
        },
        {
          title: 'checkbox3',
          name: 'checkbox3',
          value: '3',
          checked: false,
          nodeType: 'checkbox'
        }
      ]
    },
    {
      title: 'Radio2',
      name: 'radio1',
      value: '2',
      checked: false,
      nodeType: 'radio',
      children: [
        {
          title: 'checkbox4',
          name: 'checkbox4',
          value: '4',
          checked: false,
          nodeType: 'checkbox'
        },
        {
          title: 'checkbox5',
          name: 'checkbox5',
          value: '5',
          checked: false,
          nodeType: 'checkbox'
        },
        {
          title: 'checkbox6',
          name: 'checkbox6',
          value: '6',
          checked: false,
          nodeType: 'checkbox'
        }
      ]
    }

  ];

  constructor() {
  }
}
