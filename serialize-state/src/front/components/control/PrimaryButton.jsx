import React, { PropTypes } from 'react';

function PrimaryButton({ onClickHandler, buttonType = 'button', label = 'label' }) {
  return (
    <button type={buttonType} onClick={onClickHandler}>{label}</button>
  );
}

PrimaryButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
};

PrimaryButton.defaultProps = {
  buttonType: 'button',
  label: 'label',
};

export default PrimaryButton;
