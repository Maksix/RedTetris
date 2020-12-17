import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import MenuButton from '../MenuButton';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('<MenuButton />', () => {
  test('must be rendered', async () => {
    const initialState = { theme: { theme: 'dark' } };
    const store = mockStore(initialState);
    const handleClick = jest.fn();
    const component = mount(
      <Provider store={store}>
        <MenuButton onClick={handleClick} text="test" />
      </Provider>
      ,
    );
    expect(component.find('.text').text()).toBe('test');
  });

  // test('должно сработать событие при клике', async () => {
  //   const handleClick = jest.fn();
  //
  //   const rendered = mount(
  //     <MenuButton onClick={handleClick} />,
  //   );
  //   rendered.find('[role="button"]').simulate('click');
  //   expect(handleClick).toHaveBeenCalled();
  // });
  //
  // test('должно сработать событие при нажатии на Enter', async () => {
  //   const handleClick = jest.fn();
  //
  //   const rendered = mount(
  //     <MenuButton onClick={handleClick} />,
  //   );
  //   rendered.find('[role="button"]').simulate('keydown', { keyCode: 13 });
  //   expect(handleClick).toHaveBeenCalled();
  // });
});
