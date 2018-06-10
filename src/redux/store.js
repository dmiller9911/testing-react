import {
  applyMiddleware,
  compose,
  createStore,
  DeepPartial,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer, RootState } from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const middlewares = [thunk];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

export function createMockStoreCreator(reducer) {
  return initialState => {
    return createStore(
      typeof reducer === 'function' ? reducer : combineReducers(reducer),
      initialState,
      applyMiddleware(...middlewares)
    );
  };
}
