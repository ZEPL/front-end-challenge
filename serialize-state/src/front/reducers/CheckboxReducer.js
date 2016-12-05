import { CHECKBOX_ACTIVATION_UPDATE } from '../actions/CheckboxAction';

const checkbox = (state = { selected: '' }, action) => {
  switch (action.type) {
    case CHECKBOX_ACTIVATION_UPDATE:
      return Object.assign({}, state, {
        selected: action.selected,
      });
    default:
      return state;
  }
};

export default checkbox;
