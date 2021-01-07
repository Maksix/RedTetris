import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LeaderboardContent from '../LeaderboardContent';

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

const setUp = () => {
  const initialState = { theme: { theme: 'dark' }, leaderboard: { leaderboard: [{ name: 'wconnel', score: 2000 }] } };
  const store = mockStore(initialState);
  return mount(
    <Provider store={store}>
      <LeaderboardContent />
    </Provider>
    ,
  );
};

describe('<Leaderboard />', () => {
  test('should render row of leaderboard', () => {
    const component = setUp();
    const row = component.find('.leaderRow');
    expect(row.length).toBe(1);
  });
});
