import React from 'react';

import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Board } from '../Board';

const middlewares = [];
const mockStore = configureStore(middlewares);
describe('<Board />', () => {
  const initialState = { theme: { theme: 'dark' }, pieces: { pieces: [[]] }, game: { game: { status: 'started', options: { speed: 5 } } } };
  const store = mockStore(initialState);
  test('должен отрендериться', async () => {
    const rendered = mount(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <Board />
        </Provider>
      </MemoryRouter>,
    );

    expect(rendered.find(Board)).toHaveLength(1);
  });
});
