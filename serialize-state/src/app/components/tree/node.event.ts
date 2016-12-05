import {Node} from './node.model';

export interface NodeEvent {
  node: Node;
}

export interface NodeSelectedEvent extends NodeEvent {}
