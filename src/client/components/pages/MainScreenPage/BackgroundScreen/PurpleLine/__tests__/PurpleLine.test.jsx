import React from 'react';
import { shallow, mount } from 'enzyme';
import PurpleLine from '../PurpleLine';

describe('<PurpleLine />', () => {
  test('should be rendered', () => {
    shallow(<PurpleLine />);
  });

  test('should have 4 shadow blocks', () => {
    const component = shallow(<PurpleLine />);
    const shadow = component.find('.purpleShadow');
    expect(shadow.length).toBe(4);
  });

  test('should change styles on click', () => {
    const component = mount(<PurpleLine />);
    const button = component.find('.boxContainer');
    const prevStyle = button.get(0).props.style;
    button.simulate('click');
    expect(component.find('.boxContainer').get(0).props.style).not.toBe(prevStyle);
  });
});
