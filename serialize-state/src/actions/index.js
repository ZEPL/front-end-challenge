import {GET_STATE, SET_STATE} from '../constants';

// action to get state
export const getState = () => ({
  type: GET_STATE
});

// action to set application state to given state
export const setState = state => ({
  type: SET_STATE,
  state
});
