import React from 'react';

const RadioLists = (props) => {
  const radioItem = props.radios.map((radio,indexRadio) => {
    return (
      <li key={indexRadio}>
        <input
          name="radioSelected"
          type="radio"
        />
      {radio.title}
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
