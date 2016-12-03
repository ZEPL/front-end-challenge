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
    //radios is the array of radio containing checkboxs
    //inputPaste is the state of the input
    this.state = {radios,inputPaste:''};
    console.log(this.state.radios);
    //we bind the this to the function onButtonSetState so it can use this.setState etc
    this.onButtonSetStateClick=this.onButtonSetStateClick.bind(this);
    this.onButtonSaveStateClick=this.onButtonSaveStateClick.bind(this);
  }
  //we want to change the state of the radios
  //the radio_list onChange send the index of the radio
  //we map(because we have to change the state of all radios)
  //to the radios state and when we find the index equal to the index of
  //the radio, we change it to true which mean it has been selected. else we put the radio to false
  onRadiosChange(indexRadio){
    const radios=this.state.radios.map((radio,index) => {
      if (indexRadio === index) radio.state = true;
      else radio.state = false;
      return radio;
    })
    this.setState({radios})
  }
  //we want to change the state of the checkbox
  //we copy the array and we will only modify the checkbox of the Radio thanks to indexRadio & indexCheckBox
  onCheckboxChange(indexRadio,indexCheckBox){
    let radios = [...this.state.radios];
    radios[indexRadio].checkbox[indexCheckBox].state=!radios[indexRadio].checkbox[indexCheckBox].state;
    this.setState({radios});
  }
  //this function will just change the radios state by the inputState
  onButtonSetStateClick(){
    console.log(this.state.inputPaste);
    this.setState({radios:JSON.parse(this.state.inputPaste)})
  }
  //copy=> we have to create an hidden input then put the value of the radios state
  //then append the input to the html copy the value and delete it
  onButtonSaveStateClick(){
    let hiddenInput = document.createElement("input");
    hiddenInput.setAttribute("value",JSON.stringify(this.state.radios));
    document.body.appendChild(hiddenInput);
    hiddenInput.select();
    document.execCommand("copy");
    document.body.removeChild(hiddenInput);
  }
  render () {
    return (
      <div>
        <input
          type="text"
          name="pasteInput"
          placeholder="paste state here"
          value={this.state.inputPaste}
          onChange={event => this.setState({inputPaste : event.target.value})}
        />
        <button
          type="button"
          name="buttonSetState"
          onClick={this.onButtonSetStateClick}
          >
          Set state
        </button>
        <button
          type="button"
          name="buttonSaveState"
          onClick={this.onButtonSaveStateClick}
          >
          Save state
        </button>
        <RadioLists
          radios={this.state.radios}
          radiosChange={indexRadio => this.onRadiosChange(indexRadio)}
          checkboxChange={(indexRadio,indexCheckBox) => this.onCheckboxChange(indexRadio,indexCheckBox)}
        />
      </div>
    )
  }
}
