export const TREE_SET_ACTION = 'TREE_SET_ACTION';

export default function treeSetAction(value) {
  return {
    type: TREE_SET_ACTION,
    tree: value
  }
}
