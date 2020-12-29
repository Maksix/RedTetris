import React from 'react';
import configureStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import UsernameModal from '../UsernameModal';

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

const setUp = () => {
  const initialState = { username: { username: '' }, theme: { theme: 'dark' } };
  const store = mockStore(initialState);
  const utils = render(
    <Provider store={store}>
      <UsernameModal />
    </Provider>
    ,
  );
  const input = utils.getByPlaceholderText('main.enterUsername');
  return { input, ...utils };
};

describe('<UsernameModal />', () => {
  test('should be rendered', () => {
    const { input } = setUp();
    expect(input).not.toBe(undefined);
  });

  test('should change text on valid input', () => {
    const { input } = setUp();
    fireEvent.change(input, { target: { value: 'testName' } });
    expect(input.value).toBe('testName');
  });

  test('should show hint on invalid input', () => {
    const { input, getByText } = setUp();
    fireEvent.change(input, { target: { value: 'тест' } });
    expect(input.value).toBe('');
    const hint = getByText('main.usernameHint');
    expect(hint).not.toBe(undefined);
  });

  test('should change placeholder on focus and on blur', () => {
    const { input, getByPlaceholderText } = setUp();
    input.focus();
    input.blur();
    const blurredInput = getByPlaceholderText('main.enterUsername');
    expect(blurredInput).not.toBe(undefined);
  });
});
