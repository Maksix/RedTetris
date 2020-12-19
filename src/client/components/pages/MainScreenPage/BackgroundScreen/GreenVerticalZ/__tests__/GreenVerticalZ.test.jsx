import React from 'react';
import { shallow, mount } from 'enzyme';
import GreenVerticalZ from '../GreenVerticalZ';

describe('<GreenVerticalZ />', () => {
  test('should be rendered', () => {
    shallow(<GreenVerticalZ />);
  });

  test('should have 1 shadow block', () => {
    const component = shallow(<GreenVerticalZ />);
    const shadow = component.find('.greenShadow');
    expect(shadow.length).toBe(1);
  });

  test('should change styles on click', () => {
    const component = mount(<GreenVerticalZ />);
    const button = component.find('.boxContainer');
    const prevStyle = button.get(0).props.style;
    button.simulate('click');
    expect(component.find('.boxContainer').get(0).props.style).not.toBe(prevStyle);
  });
});
