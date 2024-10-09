import React from 'react';
import { shallow } from 'enzyme';
import FAQ from './FAQ';

describe('<FAQ />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FAQ />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
