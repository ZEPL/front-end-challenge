import { combineReducers } from 'redux';
import treeUpdate from './TreeUpdateReducer';
import treeSet from './TreeSetReducer';

export default combineReducers({
  treeUpdate,
  treeSet
});
