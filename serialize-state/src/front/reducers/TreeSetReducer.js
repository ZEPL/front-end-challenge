import { TREE_SET_ACTION } from '../actions/TreeSetAction';

export default function treeSetReducer(state = {}, action) {
  switch (action.type) {
    case TREE_SET_ACTION:
      return action.tree;
    default:
      return state;
  }
}