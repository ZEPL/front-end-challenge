export const TREE_INIT_ACTION = 'TREE_INIT_ACTION';
export const TREE_UPDATE_ACTION = 'TREE_UPDATE_ACTION';
export const TREE_SET_ACTION = 'TREE_SET_ACTION';

export function treeInitAction(value) {
  return {
    type: TREE_INIT_ACTION,
    tree: value
  }
}

export function treeSetAction(value) {
  return {
    type: TREE_SET_ACTION,
    jsonStr: value
  };
}

export default function treeUpdateAction(value) {
  return {
    type: TREE_UPDATE_ACTION,
    model: value
  };
}