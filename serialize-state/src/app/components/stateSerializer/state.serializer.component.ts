import {Component, OnInit, Inject, Input, ElementRef, ViewChild} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';
import {Action, ChangeStateAction} from './state.serializer.action';
import {SerializableState, dispatcher, state, requestStateAndDispatcher} from './state.serializer.state';



@Component({
  selector: 'state-serializer',
  templateUrl: './state.serializer.component.html',
  providers: [requestStateAndDispatcher]
})
export class StateSerializerComponent implements OnInit {

  @Input() initialState: any;

  @ViewChild('stateInput') stateInputEl: ElementRef;

  childStateJSON: string = '';

  constructor(@Inject(dispatcher) private dispatcher: Subject<Action>,
              @Inject(state) private state: BehaviorSubject<SerializableState>) {

  }

  ngOnInit() {
    console.log('Hello State Serializer');
    this.dispatcher.next(new ChangeStateAction(this.initialState));
  }

  /**
   * Get Child State
   * @return {any} state
   */
  get childState() {
    return this.state.getValue().state;
  }

  /**
   * Load Child State
   * @param {any} state
   */
  private loadChildState(state: any) {
    this.dispatcher.next(new ChangeStateAction(state));
  }

  /**
   * Save Child State
   * @return {any} state
   */
  private saveChildState() {
    return this.childState;
  }

  /**
   * Copy `str` to Clipboard
   * @param {string} str
   */
  private copyToClipboard(str: string) {
    try {
      this.stateInputEl.nativeElement.value = str;
      this.stateInputEl.nativeElement.select();
      document.execCommand('copy');
    } catch (err) {
      this.stateInputEl.nativeElement.value = '';
      window.prompt('Copy to clipboard: Ctrl/Cmd + C', str);
    }
    this.stateInputEl.nativeElement.value = '';
    this.childStateJSON = '';
  }



  /**
   * Get Current Child State JSON from childStateJSON and
   * Load ChildState
   */
  setState() {
    try {
      console.log(this.childStateJSON);
      let cState = JSON.parse(this.childStateJSON);
      this.loadChildState(cState);
    } catch (e) {
      console.error('State is not JSON format');
      return;
    }
  }


  /**
   * Get Current Child State and Copy to Clipboard
   */
  saveState() {
    let childStateStr = JSON.stringify(this.saveChildState());
    // copy to Clipboard
    this.copyToClipboard(childStateStr);
  }


  /**
   * Update Child State from Child Event
   * @param {any} state
   */
  updateState(state) {
    this.dispatcher.next(new ChangeStateAction(state));
  }


}
