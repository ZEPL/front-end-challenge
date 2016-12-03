import React, { Component } from 'react';
import RadioLists from './radio_lists'
//const radios is the initial state: we can change the number of radio and checkbox
//We doesn't put id in it so we will suppose that the name is UNIQUE!!!! (for map key) 
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
// this component is the parent component and has all the state of the apps
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {radios};
    console.log(this.state.radios);
  }
  //we want to change the state of the radios
  //the radio_list onChange send the index of the radio
  //we map to the radios state and when we find the index equal to the index of
  //the radio, we change it to true which mean it has been selected. else we put the radio to false
  onRadiosChange(indexRadio){
    const radios=this.state.radios.map((radio,index) => {
      if (indexRadio === index) radio.state = true;
      else radio.state = false;
      return radio;
    })
    this.setState({radios})
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
          radiosChange={indexRadio => this.onRadiosChange(indexRadio)}
        />
      </div>
    )
  }
}
