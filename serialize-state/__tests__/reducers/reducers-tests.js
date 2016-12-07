import reducer from '../../src/reducers';
import initialState from '../../src/states';
import { GET_STATE, SET_STATE, MUTATE_FORM, DC, BATMAN } from '../../src/constants';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });
})
