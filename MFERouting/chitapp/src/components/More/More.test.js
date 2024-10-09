import React from 'react';
import { shallow } from 'enzyme';
import More from './More';

describe('<More />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<More />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
