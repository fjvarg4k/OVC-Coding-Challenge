import * as dataActions from './actions';

it('should return fetchDataRequest', () => {
  const action = dataActions.fetchDataRequest();
  expect(action.type).toEqual(dataActions.FETCH_DATA_REQUEST);
});

it('should return fetchDataSuccess', () => {
  const users = ['John Smith', 'Jane Doe'];
  const action = dataActions.fetchDataSuccess(users);
  expect(action.type).toEqual(dataActions.FETCH_DATA_SUCCESS);
  expect(action.data).toEqual(users);
});

it('should return fetchDataError', () => {
  const error = 'This is an error';
  const action = dataActions.fetchDataError(error);
  expect(action.type).toEqual(dataActions.FETCH_DATA_ERROR);
  expect(action.error).toEqual(error);
});
