import React from 'react';
import { shallow } from 'enzyme';
import ViewTickets from './ViewTickets';

describe('<ViewTickets />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ViewTickets />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
