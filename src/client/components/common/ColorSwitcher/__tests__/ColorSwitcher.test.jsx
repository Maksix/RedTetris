import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ColorSwitcher from '../ColorSwitcher';

const middlewares = [];
const mockStore = configureStore(middlewares);

const setUp = (color) => {
  const initialState = { theme: { theme: color } };
  const store = mockStore(initialState);
  return mount(
    <Provider store={store}>
      <ColorSwitcher />
    </Provider>
    ,
  );
};

describe('<ColorSwitcher />', () => {
  test('must be rendered with sun icon on dark theme', async () => {
    const component = setUp('dark');
    expect(component.find('.colorBox').text()).toBe('wb_sunny');
  });

  test('moon icon on light theme', async () => {
    const component = setUp('light');
    expect(component.find('.colorBox').text()).toBe('brightness_3');
  });
});
