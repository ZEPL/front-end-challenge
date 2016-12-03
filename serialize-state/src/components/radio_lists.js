import React from 'react';
import CheckboxLists from './checkbox_lists';

const RadioLists = (props) => {
  const radioItem = props.radios.map((radio,indexRadio) => {
    return (
      <li key={indexRadio}>
        <input
          name="radioSelected"
          type="radio"
        />
        {radio.title}
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
