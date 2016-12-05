export const CHECKBOX_ACTIVATION_UPDATE = 'CHECKBOX_ACTIVATION_UPDATE';

export default function checkboxActivationUpdate(value) {
  return {
    type: CHECKBOX_ACTIVATION_UPDATE,
    selected: value
  };
}
