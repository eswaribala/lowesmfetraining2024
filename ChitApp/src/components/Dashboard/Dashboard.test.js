import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Dashboard />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
