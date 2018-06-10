import { combineReducers } from 'redux';
import { parksReducer, parksStateKey } from './parks';

export const rootReducer = combineReducers({
  [parksStateKey]: parksReducer
});
