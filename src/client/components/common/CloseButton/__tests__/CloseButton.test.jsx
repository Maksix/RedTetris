import React from 'react';

import { mount, shallow } from 'enzyme';
import CloseButton from '../CloseButton';

describe('<CloseButton />', () => {
  test('должен быть отрендерен', async () => {
    const handleClick = jest.fn();
    const rendered = shallow(
      <CloseButton onClick={handleClick} />,
    );
    expect(rendered.find('span').text()).toEqual('x');
  });

  test('должно сработать событие при клике', async () => {
    const handleClick = jest.fn();

    const rendered = mount(
      <CloseButton onClick={handleClick} />,
    );
    rendered.find('[role="button"]').simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });

  test('должно сработать событие при нажатии на Enter', async () => {
    const handleClick = jest.fn();

    const rendered = mount(
      <CloseButton onClick={handleClick} />,
    );
    rendered.find('[role="button"]').simulate('keydown', { keyCode: 13 });
    expect(handleClick).toHaveBeenCalled();
  });
});
