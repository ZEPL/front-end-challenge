// middleware to copydata into clipboard

import { GET_STATE } from '../constants';
import copyDataToClipboard from '../helpers';

function copyState({ getState }) {
  return (next) =>
    (action) => {
      if (action.type == GET_STATE) {
        copyDataToClipboard(JSON.stringify(getState()));
      }
      return next(action);
    };
}

export default copyState;
