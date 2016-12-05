import {List} from 'immutable';

export class Node {
  title: string;
  name: string;
  value: string;
  children: List<Node>;
  checked: boolean;
  nodeType: string;

  constructor(title: string, name: string, value: string, checked: boolean,
              nodeType: string, children: List<Node>) {
    this.title = title;
    this.name = name;
    this.value = value;
    this.checked = checked;
    this.children = children;
    this.nodeType = nodeType;
  }
}
