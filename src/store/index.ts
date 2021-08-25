import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'

import { rootReducers } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    // eslint-disable-next-line
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) ||
  compose;

// middleware collection
const middlewares: any[] = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducers,
  {},
  composeEnhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
