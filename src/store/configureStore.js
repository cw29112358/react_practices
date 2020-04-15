import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const allReducers = combineReducers({ ...reducers });

  const store = createStore(allReducers, {}, compose(...enhancers));

  store.runSaga = sagaMiddleware.run;

  return { store };
}
