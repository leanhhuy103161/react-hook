import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import imageSaga from './saga/image';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
));

sagaMiddleware.run(imageSaga);

export default store;