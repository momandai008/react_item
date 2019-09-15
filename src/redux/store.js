import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isEnv } from '@config';

import reducers from './reducers';

let store;
if (isEnv) {
  store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(reducers, applyMiddleware(thunk));
}

export default store;
