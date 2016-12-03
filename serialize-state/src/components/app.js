import React, { Component } from 'react';

export default class App extends Component{
  constructor(props){
    super(props);
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
      </div>
    )
  }
}
