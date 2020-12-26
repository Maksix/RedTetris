import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import GamePage from '../GamePage';

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: () => ({ params: { room: '12345', name: 'test' } }),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      language: 'ru-RU',
    },
  }),
}));

const setUp = (roomError, playerList = [{ id: 1, name: 'jjlesch' }, { id: 2, name: 'test' }]) => {
  const initialState = {
    theme: { theme: 'dark' }, role: { role: 'leader' }, room: { roomError }, game: { game: { score: 0 } }, playerList: { playerList },
  };
  const store = mockStore(initialState);
  return mount(
    <Provider store={store}>
      <GamePage />
    </Provider>
    ,
  );
};

describe('<GamePage />', () => {
  test('must be rendered', async () => {
    const component = setUp(false);
    expect(component.find('.title').length).toBe(4);
  });

  test('must render room error on error', () => {
    const component = setUp(true);
    expect(component.find('.errorContainer').length).toBe(1);
  });

  test('must render loading if no playerList provided', () => {
    const component = setUp(false, []);
    expect(component.find('.loading').length).toBe(1);
  });
});
