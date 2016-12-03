import React from 'react';

const CheckboxLists = (props) => {
  const checkboxItem = props.checkboxs.map((checkbox,indexCheckbox) => {
    return (
      <li key={indexCheckbox}>
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
