import React from 'react';
//this is not a class expends from react.Component because it doesn"t handle any state
//this component has to render the checkbox
const CheckboxLists = (props) => {
  const checkboxItem = props.checkboxs.map((checkbox,indexCheckbox) => {
    return (
      <li key={checkbox.title}>
        <input
          type="checkbox"
        />
        {checkbox.title}
      </li>
    );
  });
  return (
    <ul>
      {checkboxItem}
    </ul>
  );
}
export default CheckboxLists;
