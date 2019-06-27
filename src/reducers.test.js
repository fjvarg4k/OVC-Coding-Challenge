import * as dataActions from './actions';
import dataReducer from './reducers';

let initialState;

beforeEach(() => {
  initialState = {
    data: [],
    loading: false,
    error: null
  };
});

it('should handle FETCH_DATA_REQUEST', () => {
  const state = dataReducer(initialState, dataActions.fetchDataRequest());
  initialState.loading = true;
  expect(state).toEqual(initialState);
});

it('should handle FETCH_DATA_SUCCESS', () => {
  const users = ['John Smith', 'Jane Doe'];
  const state = dataReducer(initialState, dataActions.fetchDataSuccess(users));
  initialState.data = users;
  expect(state).toEqual(initialState);
});

it('should handle FETCH_DATA_ERROR', () => {
  const error = 'This is an error.';
  const state = dataReducer(initialState, dataActions.fetchDataError(error));
  initialState.error = error;
  expect(state).toEqual(initialState);
});
