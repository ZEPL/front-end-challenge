import {Component, OnInit, Input, Inject} from '@angular/core';
import {TreeSharedData} from './tree.shared.data';
import {Node} from './node.model.ts';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'tree-internal',
  templateUrl: './tree.internal.component.html',
  styleUrls: ['./tree.internal.component.scss']

})
export class TreeInternalComponent implements OnInit {
  @Input() node: Node;
  @Input() parentNode: Node;
  @Input() parentDisabled: boolean;

  constructor(@Inject(TreeSharedData) private treeSharedData: TreeSharedData) {

  }

  ngOnInit() {

  }


  hasChild() {
    return (this.node.children !== null);
  }

  isDisabled() {
    if (!isNullOrUndefined(this.parentNode)) {
      return this.parentDisabled || !this.parentNode.checked;
    }
    return false;
  }


  onNodeChange(event) {
    event.stopPropagation();
    this.treeSharedData.nodeSelected$.next({node: this.node});
  }

}
