import React from 'react';
import { shallow, mount } from 'enzyme';
import YellowColumn from '../YellowColumn';

describe('<YellowColumn />', () => {
  it('should be rendered', () => {
    shallow(<YellowColumn />);
  });

  it('should have 1 shadow blocks', () => {
    const component = shallow(<YellowColumn />);
    const shadow = component.find('.yellowShadow');
    expect(shadow.length).toBe(1);
  });

  it('should change styles on click', () => {
    const component = mount(<YellowColumn />);
    const button = component.find('.boxContainer');
    const prevStyle = button.get(0).props.style;
    button.simulate('click');
    expect(component.find('.boxContainer').get(0).props.style).not.toBe(prevStyle);
  });
});
