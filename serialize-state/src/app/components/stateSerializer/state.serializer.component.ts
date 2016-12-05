import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'state-serializer',
  templateUrl: './state.serializer.component.html'
})
export class StateSerializerComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    console.log('Hello State Serializer');
  }
}
