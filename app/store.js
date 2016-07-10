import { createStore } from 'redux';
import reducers from 'app/reducers';

const store = createStore(reducers);

export default store;
