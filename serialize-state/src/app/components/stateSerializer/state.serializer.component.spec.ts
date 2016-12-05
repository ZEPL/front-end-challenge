

import {TestBed, ComponentFixture} from '@angular/core/testing';
import {StateSerializerComponent} from './state.serializer.component';
import {FormsModule} from '@angular/forms';
import {TreeComponent} from '../tree/tree.component';
import {TreeInternalComponent} from '../tree/tree.internal.component';


let comp: StateSerializerComponent;
let fixture:  ComponentFixture<StateSerializerComponent>;

export function newEvent(eventName: string, bubbles = false, cancelable = false) {
  let evt = document.createEvent('CustomEvent');  // MUST be 'CustomEvent'
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}


describe('State Serializer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeInternalComponent, TreeComponent, StateSerializerComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(StateSerializerComponent);
    comp = fixture.componentInstance;
  });

  it('should initialize with input state', () => {
    let expectedState =  { 'a' : 1 };
    comp.initialState = expectedState;
    fixture.detectChanges();
    expect(comp.childState).toBe(expectedState);
  });

  it('should be set by childStateJSON when call setState()', () => {
    let expectedJSON = '{"a":1}';
    comp.childStateJSON = expectedJSON;
    fixture.detectChanges();
    comp.setState();
    expect(JSON.stringify(comp.childState)).toBe(expectedJSON);
  });

  it('should be not set by wrong childStateJSON when call setState()', () => {
    let expectedState =  { 'b' : 4 };
    let expectedJSON = '{"a":1';
    comp.initialState = expectedState;
    comp.childStateJSON = expectedJSON;
    fixture.detectChanges();
    comp.setState();
    expect(comp.childState).toBe(expectedState);
  });

  it('should be run when call saveState()', () => {
    let expectedState =  { 'a' : 1 };
    comp.initialState = expectedState;
    fixture.detectChanges();
    comp.saveState();
  });


  it('should be set by param when call updateState(state)', () => {
    let expectedState =  { 'a' : 1 };
    fixture.detectChanges();
    comp.updateState(expectedState);
    expect(comp.childState).toBe(expectedState);
  });
});


