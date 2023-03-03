import { Action, applyMiddleware, compose, createStore, Store } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const win: any = window;
const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

export const store: Store<unknown, Action<any>> = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = store;
