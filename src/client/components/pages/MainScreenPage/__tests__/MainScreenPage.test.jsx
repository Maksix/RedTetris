import React from 'react';
import { shallow } from 'enzyme';
import MainScreenPage from '../index';

describe('<MainScreenPage />', () => {
  it('should be rendered', () => {
    shallow(<MainScreenPage />);
  });

  it('should have one wrapper', () => {
    const component = shallow(<MainScreenPage />);
    const wrapper = component.find('.mainMenu');
    expect(wrapper.length).toBe(1);
  });
});
