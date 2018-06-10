import {
  PARKS_FETCH_ALL_FAIL,
  PARKS_FETCH_ALL_REQUEST,
  PARKS_FETCH_ALL_SUCCESS,
  PARKS_TOGGLE_FAVORITE,
  PARKS_FILTER,
  parkFilters
} from './parksActions';

const defaultState = {
  byId: {},
  favorites: new Set(),
  error: null,
  isLoading: false,
  filter: parkFilters.all
};

export const stateKey = 'parks';

export function parksReducer(state = defaultState, action) {
  switch (action.type) {
    case PARKS_FETCH_ALL_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case PARKS_FETCH_ALL_SUCCESS:
      return {
        ...state,
        byId: action.payload.reduce(
          (newState, park) => ({
            ...newState,
            [park.id]: park
          }),
          {}
        ),
        error: null,
        isLoading: false
      };

    case PARKS_FETCH_ALL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case PARKS_TOGGLE_FAVORITE:
      const parkId = action.payload.id;
      const favorites = new Set(state.favorites);
      if (favorites.has(parkId)) {
        favorites.delete(parkId);
      } else {
        favorites.add(parkId);
      }
      return {
        ...state,
        favorites
      };

    case PARKS_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
}
