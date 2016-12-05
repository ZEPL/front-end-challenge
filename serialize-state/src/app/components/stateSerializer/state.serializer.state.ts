// State Model
import {OpaqueToken} from '@angular/core';
import {Action, ChangeStateAction} from './state.serializer.action';
import {Subject, BehaviorSubject, Observable} from 'rxjs';


export interface SerializableState {
  state: any;
}

// RxJS
export const initialState = new OpaqueToken('initialState');
export const dispatcher = new OpaqueToken('dispatcher');
export const state = new OpaqueToken('state');

export const requestStateAndDispatcher = [
  {
    provide: initialState,
    useValue: {
      state: {}
    }
  },
  {
    provide: dispatcher,
    useValue: new Subject<Action>()
  },
  {
    provide: state,
    useFactory: stateFn,
    deps: [initialState, dispatcher]
  }
];


function stateFn(initialState: SerializableState, actions: Observable<Action>): BehaviorSubject<SerializableState> {

  let requestStatObservable = actions.scan((state: SerializableState, action) => {
    let newState: SerializableState = calculateTemplateSearch(state, action);
    return newState;

  }, initialState)
    .share();

  // noinspection TypeScriptValidateTypes
  return wrapIntoBehaviorSubject(initialState, requestStatObservable);
}

function calculateTemplateSearch(state: SerializableState, action): any {
  if (!state) {
    return null;
  }

  if (action instanceof ChangeStateAction) {
    return {
      state: action.state
    };
  } else {
    return state;
  }
}


// Factory
function wrapIntoBehaviorSubject(init, obs) {
  const res = new BehaviorSubject(init);
  obs.subscribe(s => res.next(s));
  return res;
}
