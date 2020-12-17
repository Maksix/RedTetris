import React from 'react';
import { shallow, mount } from 'enzyme';
import GreenVerticalZ from '../GreenVerticalZ';

describe('<GreenVerticalZ />', () => {
  it('should be rendered', () => {
    shallow(<GreenVerticalZ />);
  });

  it('should have 1 shadow block', () => {
    const component = shallow(<GreenVerticalZ />);
    const shadow = component.find('.greenShadow');
    expect(shadow.length).toBe(1);
  });

  it('should change styles on click', () => {
    const component = mount(<GreenVerticalZ />);
    const button = component.find('.boxContainer');
    const prevStyle = button.get(0).props.style;
    button.simulate('click');
    expect(component.find('.boxContainer').get(0).props.style).not.toBe(prevStyle);
  });
});
