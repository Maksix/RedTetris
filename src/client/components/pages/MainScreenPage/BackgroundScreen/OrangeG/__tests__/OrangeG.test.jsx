import React from 'react';
import { shallow, mount } from 'enzyme';
import OrangeG from '../OrangeG';

describe('<OrangeG />', () => {
  it('should be rendered', () => {
    shallow(<OrangeG />);
  });

  it('should have 3 shadow blocks', () => {
    const component = shallow(<OrangeG />);
    const shadow = component.find('.orangeShadow');
    expect(shadow.length).toBe(3);
  });

  it('should change styles on click', () => {
    const component = mount(<OrangeG />);
    const button = component.find('.boxContainer');
    const prevStyle = button.get(0).props.style;
    button.simulate('click');
    expect(component.find('.boxContainer').get(0).props.style).not.toBe(prevStyle);
  });
});
