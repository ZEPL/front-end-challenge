import { TREE_UPDATE_ACTION, TREE_SET_ACTION, TREE_INIT_ACTION } from '../actions/TreeUpdateAction';
import BooleanElement from '../model/BooleanElement';

export default function treeUpdateReducer(state = { tree: [] }, action) {
  switch (action.type) {
    case TREE_INIT_ACTION:
      return Object.assign({}, state, { tree: action.tree });
    
    case TREE_UPDATE_ACTION:
      const newTree = [ ...state.tree ];
      BooleanElement.traverse(action.model.key, newTree, action.model);
      
      return Object.assign({}, state, { tree: newTree});
      
    case TREE_SET_ACTION:
      let newState;
      
      try {
        const newTree = [ ...state.tree ];
        const jsonTree = JSON.parse(action.jsonStr);
        BooleanElement.updateElementsUsingJson(jsonTree, newTree);
        // const newTree = BooleanElement.createFromJson(jsonTree);

        newState = Object.assign({}, state, { tree: newTree});
      } catch (err) {
        newState = state;
      }
      
      return newState;

    default:
      return state;
  }
}