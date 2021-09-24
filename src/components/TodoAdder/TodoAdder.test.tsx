import React from 'react';
import { shallow } from 'enzyme';
import TodoAdder from './TodoAdder';

describe('<TodoAdder />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TodoAdder />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
