import React from 'react';
import { shallow, mount } from 'enzyme';
import RedSquare from '../RedSquare';

describe('<RedSquare />', () => {
  test('should be rendered', () => {
    shallow(<RedSquare />);
  });

  test('should have 2 shadow blocks', () => {
    const component = shallow(<RedSquare />);
    const shadow = component.find('.redShadow');
    expect(shadow.length).toBe(2);
  });

  test('should change styles on click', () => {
    const component = mount(<RedSquare />);
    const button = component.find('.boxContainer');
    const prevStyle = button.get(0).props.style;
    button.simulate('click');
    expect(component.find('.boxContainer').get(0).props.style).not.toBe(prevStyle);
  });
});
