import React from 'react';
import { shallow, mount } from 'enzyme';
import BlueZ from '../BlueZ';

describe('<BlueZ />', () => {
  it('should be rendered', () => {
    shallow(<BlueZ />);
  });

  it('should have 2 shadow blocks', () => {
    const component = shallow(<BlueZ />);
    const shadow = component.find('.blueShadow');
    expect(shadow.length).toBe(2);
  });

  it('should change styles on click', () => {
    const component = mount(<BlueZ />);
    const button = component.find('.boxContainer');
    const prevStyle = button.get(0).props.style;
    button.simulate('click');
    expect(component.find('.boxContainer').get(0).props.style).not.toBe(prevStyle);
  });
});
