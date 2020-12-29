import React from 'react';
import { shallow } from 'enzyme';
import GameHints from '../GameHints';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('<GameHints />', () => {
  test('must be rendered', async () => {
    const component = shallow(
      <GameHints />,
    );
    expect(component.find('.rotateFigureBlock').length).toBe(1);
  });
});
