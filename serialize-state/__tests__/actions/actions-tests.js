import { formChange, getState, setState } from '../../src/actions';
import { GET_STATE, SET_STATE, MUTATE_FORM, DC, BATMAN } from '../../src/constants';

describe('actions', () => {
  it('should change the username', () => {
    const newState = {
      userName: 'JULIAN'
    };
    const expectedAction = {
      type: MUTATE_FORM,
      state: {
        userName: 'JULIAN'
      }
    };
    expect(formChange(newState)).toEqual(expectedAction);
  });

  it('should change the selected comic', () => {
    const newState = {
      comic: DC
    };
    const expectedAction = {
      type: MUTATE_FORM,
      state: {
        comic: DC
      }
    };
    expect(formChange(newState)).toEqual(expectedAction);
  });

  it('should change the selected hero', () => {
    const newState = {
      superHeroes: [BATMAN]
    };
    const expectedAction = {
      type: MUTATE_FORM,
      state: {
        superHeroes: [BATMAN]
      }
    };
    expect(formChange(newState)).toEqual(expectedAction);
  });
});
