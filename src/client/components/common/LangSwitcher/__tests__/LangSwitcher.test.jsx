import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LangSwitcher from '../LangSwitcher';

const middlewares = [];
const mockStore = configureStore(middlewares);

const mockChangeLanguage = jest.fn();

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      language: 'ru-RU',
      changeLanguage: mockChangeLanguage,
    },
  }),
}));

const setUp = () => {
  const initialState = { theme: { theme: 'dark' } };
  const store = mockStore(initialState);
  return mount(
    <Provider store={store}>
      <LangSwitcher />
    </Provider>
    ,
  );
};

describe('<LangSwitcher />', () => {
  test('should render menu when username provided', () => {
    const component = setUp();
    const lang = component.find('.text');
    expect(lang.length).toBe(1);
  });

  test('should call change language on click', () => {
    const component = setUp();
    component.find('[role="button"]').simulate('click');
    expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
  });

  test('should call change language on keydown', () => {
    const component = setUp();
    component.find('[role="button"]').simulate('keydown', { keyCode: 13 });
    expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
  });

  test('should call change language on click to eng or rus', () => {
    const component = setUp();
    component.find('[role="button"]').simulate('click');
    expect(mockChangeLanguage).toHaveBeenCalledWith('en-US');
  });
});
