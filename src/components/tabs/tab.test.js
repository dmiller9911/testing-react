import React from 'react';
import { shallow } from 'enzyme';
import { Tab } from './tab';

it('renders inactive', () => {
  const view = shallow(<Tab label="Label" onClick={jest.fn()} />);
  expect(view).toMatchSnapshot();
});

it('renders active', () => {
  const view = shallow(<Tab active label="Label" onClick={jest.fn()} />);
  expect(view).toMatchSnapshot();
});
