jest.mock('./api/parks');

import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import { getParks } from './api/parks';
import { wait } from './testUtils/wait';

const mockPark1 = createMockPark(1);
const mockPark2 = createMockPark(2);

getParks.mockReturnValue(Promise.resolve([mockPark1, mockPark2]));

it('renders', async () => {
  const view = shallow(<App />);
  await wait();
  view.update();
  expect(view).toMatchSnapshot();
});

function createMockPark(id) {
  return {
    id,
    name: `Park ${id}`
  };
}
