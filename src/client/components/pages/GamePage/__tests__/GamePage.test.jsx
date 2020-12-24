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

const setUp = () => {
  const initialState = { theme: { theme: 'dark' }, role: { role: 'leader' }, playerList: { playerList: [{ id: 1, name: 'jjlesch' }, { id: 2, name: 'test' }] } };
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
    const component = setUp();
    expect(component.find('.title').length).toBe(4);
  });
});
