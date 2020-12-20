import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../Logo';

describe('<Logo />', () => {
  test('should be rendered', () => {
    shallow(<Logo />);
  });
});
