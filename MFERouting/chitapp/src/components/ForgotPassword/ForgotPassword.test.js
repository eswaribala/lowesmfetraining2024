import React from 'react';
import { shallow } from 'enzyme';
import ForgotPassword from './ForgotPassword';

describe('<ForgotPassword />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ForgotPassword />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
