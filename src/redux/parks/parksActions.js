import { getParks } from '../../api/parks';

export const PARKS_FETCH_ALL_REQUEST = 'parks/fetch_all_request';
export const PARKS_FETCH_ALL_SUCCESS = 'parks/fetch_all_success';
export const PARKS_FETCH_ALL_FAIL = 'parks/fetch_all_fail';
export const PARKS_TOGGLE_FAVORITE = 'parks/toggle_favorite';
export const PARKS_FILTER = 'parks/filter';

export const parkFilters = {
  all: 'all',
  favorites: 'favorites'
};

export const getAllParksRequest = () => ({ type: PARKS_FETCH_ALL_REQUEST });
export const getAllParksSuccess = parks => ({
  type: PARKS_FETCH_ALL_SUCCESS,
  payload: parks
});
export const getAllParksFailure = err => ({
  type: PARKS_FETCH_ALL_FAIL,
  payload: err
});
export function getAllParks() {
  return dispatch => {
    dispatch(getAllParksRequest());
    getParks()
      .then(parks => dispatch(getAllParksSuccess(parks)))
      .catch(err => dispatch(getAllParksFailure(err)));
  };
}

export function toggleFavorite(park) {
  return {
    type: PARKS_TOGGLE_FAVORITE,
    payload: park
  };
}

export function setParkFilter(filter) {
  return {
    type: PARKS_FILTER,
    payload: filter
  };
}
