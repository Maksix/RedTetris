import React from 'react';
import { shallow } from 'enzyme';
import MainScreenPage from '../index';

describe('<MainScreenPage />', () => {
  test('should be rendered', () => {
    shallow(<MainScreenPage />);
  });

  test('should have one wrapper', () => {
    const component = shallow(<MainScreenPage />);
    const wrapper = component.find('.mainMenu');
    expect(wrapper.length).toBe(1);
  });
});
