import React from 'react';
import configureStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import JoinRoom from '../JoinRoom';

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

const setUp = () => {
  const initialState = { username: { username: 'username' }, theme: { theme: 'dark' } };
  const store = mockStore(initialState);
  const utils = render(
    <Provider store={store}>
      <MemoryRouter>
        <JoinRoom />
      </MemoryRouter>
    </Provider>
    ,
  );
  const input = utils.getByPlaceholderText('main.joinRoom');
  return { input, ...utils };
};

describe('<JoinRoom />', () => {
  test('should be rendered', () => {
    const { input } = setUp();
    expect(input).not.toBe(undefined);
  });

  test('should change text on valid input', () => {
    const { input } = setUp();
    fireEvent.change(input, { target: { value: 'Room1' } });
    expect(input.value).toBe('Room1');
  });

  test('should show hint on invalid input', () => {
    const { input, getByText } = setUp();
    fireEvent.change(input, { target: { value: 'тест' } });
    expect(input.value).toBe('');
    const hint = getByText('main.usernameHint');
    expect(hint).not.toBe(undefined);
  });

  test('should change history path on success input and button click', () => {
    const { input, getByText } = setUp();
    fireEvent.change(input, { target: { value: 'Room1' } });
    fireEvent.click(getByText('play_arrow'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/Room1[username]');
  });

  test('should change placeholder on focus and on blur', () => {
    const { input, getByPlaceholderText } = setUp();
    input.focus();
    const changedInput = getByPlaceholderText('main.joinRoomPlaceholder');
    expect(changedInput).not.toBe(undefined);
    input.blur();
    const blurredInput = getByPlaceholderText('main.joinRoom');
    expect(blurredInput).not.toBe(undefined);
  });
});
