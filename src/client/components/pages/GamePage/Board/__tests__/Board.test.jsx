import React from 'react';

import { mount } from 'enzyme';
import { Board } from '../Board';

describe('<Board />', () => {
  test('должен отрендериться', async () => {
    const rendered = mount(
      <Board />,
    );

    expect(rendered.find(Board)).toHaveLength(1);
  });
});
