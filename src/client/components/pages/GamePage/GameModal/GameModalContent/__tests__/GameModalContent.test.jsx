import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import GameModalContent from '../GameModalContent';

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: () => ({ params: { room: '12345' } }),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      language: 'ru-RU',
    },
  }),
}));

const setUp = () => {
  const initialState = { theme: { theme: 'dark' } };
  const store = mockStore(initialState);
  return mount(
    <Provider store={store}>
      <GameModalContent />
    </Provider>
    ,
  );
};

describe('<GameModalContent />', () => {
  test('must be rendered', async () => {
    const component = setUp();
    expect(component.find('.contentTitle').text()).toBe('main.gamePage.modal.gameOptions');
  });
});
