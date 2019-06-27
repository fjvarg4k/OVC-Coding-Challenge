import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducers';

const store = createStore(
  combineReducers({
    data: dataReducer
  }),
  applyMiddleware(thunk)
);

export default store;
