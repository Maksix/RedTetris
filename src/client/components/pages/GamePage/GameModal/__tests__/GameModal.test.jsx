import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import GameModal from '../GameModal';

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
      <GameModal />
    </Provider>
    ,
  );
};

describe('<GameModal />', () => {
  test('must be rendered', async () => {
    const component = setUp();
    expect(component.find('.startGameIcon').text()).toBe('play_arrow');
  });

  test('must handle onClick', async () => {
    const component = setUp();
    component.find('[role="button"]').simulate('click');
    expect(component.find('.modalBox').length).toBe(1);
  });
});
