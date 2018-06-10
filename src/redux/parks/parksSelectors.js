import { createSelector } from 'reselect';
import { parkFilters } from './parksActions';
import { stateKey } from './parksReducer';

export const selectParksState = state => state[stateKey];
export const selectParks = state => Object.values(selectParksState(state).byId);
export const selectParkFilter = state => selectParksState(state).filter;
export const selectFavorites = state => selectParksState(state).favorites;
export const selectParksLoading = state => selectParksState(state).isLoading;

export const selectFilteredParks = createSelector(
  [selectParkFilter, selectParks, selectFavorites],
  (filter, parks, favorites) => {
    switch (filter) {
      case parkFilters.favorites:
        return parks.filter(p => favorites.has(p.id));
      case parkFilters.all:
      default:
        return parks;
    }
  }
);
