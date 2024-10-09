import React from 'react';
import { shallow } from 'enzyme';
import DuePayments from './DuePayments';

describe('<DuePayments />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DuePayments />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
