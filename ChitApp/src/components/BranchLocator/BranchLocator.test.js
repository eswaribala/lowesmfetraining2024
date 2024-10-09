import React from 'react';
import { shallow } from 'enzyme';
import BranchLocator from './BranchLocator';

describe('<BranchLocator />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BranchLocator />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
