import React from 'react';
import { mount } from 'enzyme';
import BackgroundScreen from '../BackgroundScreen';
import RedSquare from '../RedSquare/RedSquare';

describe('<BackgroundScreen />', () => {
  it('should be rendered', () => {
    const component = mount(<BackgroundScreen />);
    const redSquare = component.find(RedSquare);
    expect(redSquare.exists()).toBe(true);
  });
});
