import React from 'react';
import { shallow } from 'enzyme';
import DataFetcher from './DataFetcher';

describe('<DataFetcher />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DataFetcher />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
