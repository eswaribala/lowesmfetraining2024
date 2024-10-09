import React from 'react';
import { shallow } from 'enzyme';
import MyTickets from './MyTickets';

describe('<MyTickets />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MyTickets />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
