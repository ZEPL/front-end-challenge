import { GET_STATE, SET_STATE, MUTATE_FORM } from '../constants';

// action to get state
export const getState = state => ({
  type: GET_STATE,
  state
});

// action to set application state to given state
export const setState = state => ({
  type: SET_STATE,
  state
});

export const formChange = state => ({
  type: MUTATE_FORM,
  state
});
