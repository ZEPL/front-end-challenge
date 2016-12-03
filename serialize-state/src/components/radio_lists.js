import React from 'react';
import CheckboxLists from './checkbox_lists';
//this is not a class expends from react.Component because it doesn"t handle any state
//this component has to render the radios and his child: checkbox
const RadioLists = (props) => {
  const radioItem = props.radios.map((radio,indexRadio) => {
    return (
      <li key={radio.title}>
        <input
          name="radioSelected"
          type="radio"
          value={radio.state}
          checked={radio.state}
          onChange={event => props.radiosChange(indexRadio)}
        />
        {radio.title}
        {radio.state.toString()}
        <CheckboxLists
          checkboxs={radio.checkbox}
        />
      </li>
    );
  });
  return (
    <ul>
      {radioItem}
    </ul>
  );
}

export default RadioLists;
