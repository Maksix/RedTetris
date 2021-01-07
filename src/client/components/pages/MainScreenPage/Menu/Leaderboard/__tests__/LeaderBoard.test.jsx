import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Leaderboard from '../Leaderboard';

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

const setUp = () => {
  const initialState = { theme: { theme: 'dark' }, leaderboard: { leaderboard: [{ name: 'wconnel', score: 2000 }] } };
  const store = mockStore(initialState);
  return mount(
    <Provider store={store}>
      <Leaderboard />
    </Provider>
    ,
  );
};

describe('<Leaderboard />', () => {
  test('should render public button', () => {
    const component = setUp();
    const menuBlock = component.find('.button');
    expect(menuBlock.length).toBe(1);
  });

  test('should render public modal form on click', () => {
    const component = setUp();
    component.find('[role="button"]').simulate('click');
    const modalBox = component.find('.modalBox');
    expect(modalBox.length).toBe(1);
  });

  test('should close public modal form on close button', () => {
    const component = setUp();
    component.find('[role="button"]').simulate('click');
    component.find('.buttonBox').simulate('click');
    const modalBox = component.find('.modalBox');
    expect(modalBox.length).toBe(0);
  });
});
