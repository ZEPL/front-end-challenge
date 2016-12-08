import reducer from '../../src/reducers';
import initialState from '../../src/states';
import { GET_STATE, SET_STATE, MUTATE_FORM, DC, BATMAN } from '../../src/constants';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should change the user name', () => {
    expect(
      reducer(initialState, {
        type: MUTATE_FORM,
        state: {
          userName: 'Julian'
        }
      })
    ).toEqual({...initialState, ...{
      userName: 'Julian'
    }});
  });

  it('should change the selected comic', () => {
    expect(
      reducer(initialState, {
        type: MUTATE_FORM,
        state: {
          comic: DC
        }
      })
    ).toEqual({...initialState, ...{
      comic: DC
    }});
  });

  it('should change the selected super hero', () => {
    expect(
      reducer(initialState, {
        type: MUTATE_FORM,
        state: {
          superHeroes: [BATMAN]
        }
      })
    ).toEqual({...initialState, ...{
      superHeroes: [BATMAN]
    }});
  });

  it('should set the state', () => {
    let newState = {
      userName: 'Julian',
      comic: DC,
      superHeroes: [BATMAN]
    };
    expect(
      reducer(undefined, {
        type: SET_STATE,
        state: newState
      })
    ).toEqual(newState);
  });
});
