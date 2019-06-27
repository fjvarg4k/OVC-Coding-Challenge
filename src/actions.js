import { API_BASE_URL } from './config';
import { normalizeResponseErrors } from './utilities';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
});

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  data
});

export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error
});

export const fetchData = () => (dispatch, getState) => {
  dispatch(fetchDataRequest());
  return (
    fetch(`${API_BASE_URL}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(resJson => dispatch(fetchDataSuccess(resJson)))
    .catch(err => {
      dispatch(fetchDataError(err))
    })
  );
};
