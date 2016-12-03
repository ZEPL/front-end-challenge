import React, { Component } from 'react';
import RadioLists from './radio_lists'
const radios = [{
  title: "radio1",
  state: true,
  checkbox:[{
    "title": "checkbox1",
    "state": true //false
  },{
    "title": "checkbox2",
    "state": true //false
  }]
  },
  {
    title: "radio2",
    state: false,
    checkbox:[{
      "title": "checkbox3",
      "state": false //false
    },{
      "title": "checkbox4",
      "state": true //false
    },{
      "title": "checkbox5",
      "state": false //false
    }]
}];
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {radios};
    console.log(this.state.radios);
  }
  render () {
    return (
      <div>
        <input
          type="text"
          name="pasteInput"
          placeholder="paste state here"
        />
        <button
          type="button"
          name="buttonSetState">
          Set state
        </button>
        <button
          type="button"
          name="buttonSaveState">
          Save state
        </button>
        <RadioLists
          radios={this.state.radios}
        />
      </div>
    )
  }
}
