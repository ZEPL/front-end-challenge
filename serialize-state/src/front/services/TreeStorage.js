import Moment from 'moment';

class TreeStorage {
  static set(tree) {
    const date = Moment(new Date()).format('YYYYMMDDHHmm');
    localStorage.setItem(`tree:${date}`, tree);
    localStorage.setItem('tree:latest', date);
  }
  
  static get() {
    const latest = localStorage.getItem('tree:latest');
    return localStorage.getItem(`tree:${latest}`);
  }
  
  static treeToJson(tree) {
    const json = {};
    tree.forEach(element => Object.assign(json, element.toJson()));
    
    return json;
  }
  
  static treeToString(tree) {
    let treeStr = '';
    
    try {
      const json = TreeStorage.treeToJson(tree);
      
      treeStr = JSON.stringify(json);
      treeStr = (treeStr === '{}') ? '' : treeStr;
    } catch(err) {
      treeStr = '';
    }
    
    return treeStr;
  }
}

export default TreeStorage;