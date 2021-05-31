import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import {authSaga} from './sagas';

import {authReducer} from './reducers';

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  auth: authReducer,
});

const storeConfig = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(authSaga);

export default storeConfig;
