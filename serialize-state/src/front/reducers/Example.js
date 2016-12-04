import EXAMPLE_ACTION from '../actions/Example';

const example = (state = { value: 0 }, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return Object.assign({}, state, {
        value: state.value,
      });
    default:
      return state;
  }
};

export default example;
