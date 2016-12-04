import React from 'react';
import { connect } from 'react-redux';
import { getState, setState } from '../actions';

let Clipboard = ({ dispatch }) => {
  let input;

  return (
    <section>
      <input placeholder="Paste state here" ref={node => {
        input = node;
      }}/>

      <button onClick={e => {
        try { // simple test to validate if entered text is JSON
          JSON.parse(input.value)
          dispatch(setState(input.value))
          input.value = ''
        } catch (e) {
          console.warn('Cannot parse entered state');
        }
      }}>Set State</button>

      <button onClick={e => {
        dispatch(getState())
        input.value = ''
      }}>Get State</button>
    </section>
  );
}

Clipboard = connect()(Clipboard);

export default Clipboard;
