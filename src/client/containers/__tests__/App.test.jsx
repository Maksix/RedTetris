import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App';

describe('<App />', () => {
  test('should be rendered', () => {
    shallow(<App />);
  });

  test('should render not found component with wrong route', () => {
    const history = createMemoryHistory();
    history.push('/bad/route');
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>,
    );
    const notFound = getByText('not found');
    expect(notFound).not.toBe(undefined);
  });
});
