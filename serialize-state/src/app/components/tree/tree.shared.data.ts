import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {NodeSelectedEvent} from './node.event';


@Injectable()
export class TreeSharedData {
  public nodeSelected$: Subject<NodeSelectedEvent> = new Subject<NodeSelectedEvent>();

}
