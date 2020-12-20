import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Menu from '../Menu';

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const setUp = (username) => {
  const initialState = { username: { username }, theme: { theme: 'dark' } };
  const store = mockStore(initialState);
  return mount(
    <Provider store={store}>
      <Menu />
    </Provider>
    ,
  );
};

describe('<Menu />', () => {
  test('should render menu when username provided', () => {
    const component = setUp('username');
    const menuBlock = component.find('.menuBlock');
    expect(menuBlock.length).toBe(1);
  });

  test('should render modal menu when no username provided', () => {
    const component = setUp('');
    const usernameModal = component.find('UsernameModal');
    expect(usernameModal.length).toBe(1);
  });

  test('should change history when starts game', () => {
    const mockStores = configureStore([]);
    const initialState = { username: { username: 'qwerty' }, theme: { theme: 'dark' } };
    const store = mockStores(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Menu />
        </MemoryRouter>
      </Provider>,
    );
    fireEvent.click(getByText('main.startGame'));
    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
  });
});
