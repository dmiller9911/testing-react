jest.mock('./api/parks');

import { getParks, Park } from './api/parks';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { App } from './App';
import Switch from '@material-ui/core/Switch';
import { mountWithTheme } from './testUtils/mountWithTheme';
import { wait } from './testUtils/wait';
import { ParkFilter } from './components/ParkFilter';
import { ParkList } from './components/ParkList';

const getParksMock = getParks as jest.Mock;

beforeEach(() => {
  getParksMock.mockResolvedValue([]);
});

test('toggling favoritesOnly switches updates checked value', async () => {
  const view = mountWithTheme(<App />);
  act(() => {
    view.find(Switch).props().onChange!({} as any, false);
  });
  view.update();
  expect(view.find(Switch).prop('checked')).toBe(true);
  act(() => {
    view.find(Switch).props().onChange!({} as any, false);
  });
  view.update();
  expect(view.find(Switch).prop('checked')).toBe(false);
});

test('ParkFilter onChange updates parkFitler value', () => {
  const view = mountWithTheme(<App />);
  const filterValue = 'foo';
  act(() => {
    view.find(ParkFilter).props().onChange!({
      target: { value: filterValue }
    } as any);
  });
  view.update();
  expect(view.find(ParkFilter).props().value).toBe(filterValue);
});

test('Parks returned from getParks are passed to the ParkList', async () => {
  const parks: Park[] = [];
  getParksMock.mockResolvedValue(parks);
  const view = mountWithTheme(<App />);
  await wait();
  view.update();
  expect(view.find(ParkList).props().parks).toBe(parks);
});

test('ParkList onToggleFavorite park to favorites list if it is not there already', async () => {
  const park: Park = {
    id: 'Park Id'
  } as any;
  const parks: Park[] = [park];
  getParksMock.mockResolvedValue(parks);
  const view = mountWithTheme(<App />);
  await wait();
  act(() => {
    view
      .find(ParkList)
      .props()
      .onToggleFavorite(park);
  });
  view.update();
  expect(
    view
      .find(ParkList)
      .props()
      .favoriteParks.has(park.id)
  ).toBe(true);
  act(() => {
    view
      .find(ParkList)
      .props()
      .onToggleFavorite(park);
  });
  view.update();
  expect(
    view
      .find(ParkList)
      .props()
      .favoriteParks.has(park.id)
  ).toBe(false);
});

test('Parks are filtered by favorite if favoriteOnly is true', async () => {
  const favoritePark: Park = {
    id: 'Favorite'
  } as any;
  const otherPark: Park = {
    id: 'other'
  } as any;
  const parks: Park[] = [favoritePark, otherPark];
  getParksMock.mockResolvedValue(parks);
  const view = mountWithTheme(<App />);
  await wait();
  act(() => {
    view.find(Switch).props().onChange!({} as any, false);
    view
      .find(ParkList)
      .props()
      .onToggleFavorite(favoritePark);
  });
  view.update();
  expect(view.find(ParkList).props().parks).toEqual([favoritePark]);
});

test('Parks are filtered by name', async () => {
  const firstPark: Park = {
    id: 'first',
    name: 'first'
  } as any;
  const secondPark: Park = {
    id: 'second',
    name: 'second'
  } as any;
  const parks: Park[] = [firstPark, secondPark];
  getParksMock.mockResolvedValue(parks);
  const view = mountWithTheme(<App />);
  await wait();
  act(() => {
    view.find(ParkFilter).props().onChange!({
      target: { value: secondPark.name.toUpperCase() }
    } as any);
  });
  view.update();
  expect(view.find(ParkList).props().parks).toEqual([secondPark]);
});

test('Parks are filtered by name and favorites', async () => {
  const favoritePark: Park = {
    id: 'favorite',
    name: 'favorite'
  } as any;
  const otherPark: Park = {
    id: 'other',
    name: 'other'
  } as any;
  const parks: Park[] = [favoritePark, otherPark];
  getParksMock.mockResolvedValue(parks);
  const view = mountWithTheme(<App />);
  await wait();
  act(() => {
    view
      .find(ParkList)
      .props()
      .onToggleFavorite(favoritePark);
    view.find(Switch).props().onChange!({} as any, false);
    view.find(ParkFilter).props().onChange!({
      target: { value: 'other' }
    } as any);
  });
  view.update();
  expect(view.find(ParkList).props().parks).toEqual([]);
});
