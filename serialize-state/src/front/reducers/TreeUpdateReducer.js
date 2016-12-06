import { TREE_UPDATE_ACTION, TREE_INIT_ACTION } from '../actions/TreeUpdateAction';
import BooleanElement from '../model/BooleanElement';

export default function treeUpdateReducer(state = { tree: [] }, action) {
  switch (action.type) {
    case TREE_INIT_ACTION:
      return Object.assign({}, state, { tree: action.tree });
    
    case TREE_UPDATE_ACTION:
      const newTree = [ ...state.tree ];
      BooleanElement.traverse(action.model.key, newTree, action.model);
      
      return Object.assign({}, state, { tree: newTree});

    default:
      return state;
  }
}