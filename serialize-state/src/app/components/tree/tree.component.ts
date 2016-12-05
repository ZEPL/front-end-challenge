import {Component, OnChanges, OnInit, SimpleChanges, Input, EventEmitter, Output, Inject} from '@angular/core';
import {List} from 'immutable';
import {Node} from './node.model';
import {TreeSharedData} from './tree.shared.data';
import {NodeEvent} from './node.event';


@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  providers: [TreeSharedData]

})
export class TreeComponent implements OnInit, OnChanges {


  @Input() datas: List<Node>;
  @Output() change = new EventEmitter();

  private nodes: List<Node>;

  constructor(@Inject(TreeSharedData) private treeSharedData: TreeSharedData) {
  }

  ngOnInit(): void {
    this.nodes = this.convertToNode();
    this.treeSharedData.nodeSelected$.subscribe((e: NodeEvent) => {
      this.change.emit(calculateTree(this.nodes, e.node));
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.nodes = this.convertToNode();
  }

  /**
   * Convert List<any> to List<Node>
   * @returns {List<Node>}
   */
  convertToNode(): List<Node> {
    try {
      return List<Node>(this.datas.map((info: any) =>
        new Node(info.title, info.name, info.value, info.checked, info.nodeType, info.children)
      ));
    } catch (e) {
      return List<Node>();
    }
  }

}

/**
 * Generate New Nodes using node property
 * @param nodes
 * @param node
 * @returns {any}
 */
function calculateTree(nodes: List<Node>, node: Node) {
  try {
    return List<Node>(nodes.map((n: Node) => {
        let checked = n.checked;
        if (node.nodeType === 'radio') {
          if (n.name === node.name) {
            checked = false;
            if (n.value === node.value) {
              checked = true;
            }
          }
        } else {
          if (n === node) {
            checked = !checked;
          }
        }
        return new Node(n.title, n.name, n.value,
          checked, n.nodeType, calculateTree(n.children, node));
      }
    ));
  } catch (e) {
    return List<Node>();
  }


}
