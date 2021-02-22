import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import EndGameModalContent from '../EndGameModalContent';

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      language: 'ru-RU',
    },
  }),
}));

const setUp = () => {
  const initialState = { theme: { theme: 'dark' }, game: { game: { score: 500 } } };
  const store = mockStore(initialState);
  return mount(
    <Provider store={store}>
      <EndGameModalContent />
    </Provider>
    ,
  );
};

describe('<EndGameModalContent />', () => {
  test('must be rendered', async () => {
    const component = setUp();
    expect(component.find('.buttonText').text()).toBe('main.gamePage.modal.endGameButton');
  });
});
