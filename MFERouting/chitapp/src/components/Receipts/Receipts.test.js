import React from 'react';
import { shallow } from 'enzyme';
import Receipts from './Receipts';

describe('<Receipts />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Receipts />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
