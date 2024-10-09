import React from 'react';
import { shallow } from 'enzyme';
import DashboardMenu from './DashboardMenu';

describe('<DashboardMenu />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DashboardMenu />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
