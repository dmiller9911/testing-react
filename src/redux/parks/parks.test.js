jest.mock('../../api/parks');

import { createMockStoreCreator } from '../store';
import { parksReducer, stateKey } from './parksReducer';
import * as actions from './parksActions';
import { wait } from '../../testUtils/wait';
import { getParks } from '../../api/parks';
import * as selectors from './parksSelectors';

const createParksStore = createMockStoreCreator({ [stateKey]: parksReducer });
const park1 = { id: 'park1' };
const park2 = { id: 'park2' };

getParks.mockReturnValue(Promise.resolve([park1, park2]));

it('handles fetching all parks', async () => {
  const store = createParksStore();
  store.dispatch(actions.getAllParks());
  expect(selectors.selectParksLoading(store.getState())).toBe(true);
  await wait();
  expect(selectors.selectParks(store.getState())).toMatchSnapshot('success');
});

it('toggles a park as a favorite', () => {
  const store = createParksStore();
  store.dispatch(actions.toggleFavorite(park1));
  expect(selectors.selectFavorites(store.getState())).toMatchSnapshot(
    'adds favorite'
  );
  store.dispatch(actions.toggleFavorite(park1));
  expect(selectors.selectFavorites(store.getState())).toMatchSnapshot(
    'removes favorite'
  );
});

it('sets filter', () => {
  const store = createParksStore();
  store.dispatch(actions.setParkFilter(actions.parkFilters.favorites));
  expect(selectors.selectParkFilter(store.getState())).toBe(
    actions.parkFilters.favorites
  );
});
