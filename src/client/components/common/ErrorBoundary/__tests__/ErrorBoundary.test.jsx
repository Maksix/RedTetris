import React from 'react';
import { mount } from 'enzyme';
import { ErrorBoundary } from '../ErrorBoundary';
import BackgroundScreen
  from '../../../pages/MainScreenPage/BackgroundScreen/BackgroundScreen';
import RedSquare
  from '../../../pages/MainScreenPage/BackgroundScreen/RedSquare/RedSquare';

const ErrorComponent = () => null;

describe('ErrorBoundary', () => {
  test('should display an ErrorMessage if wrapped component throws', () => {
    const component = mount(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );
    const error = new Error('test');
    component.find(ErrorComponent).simulateError(error);
    expect(component.find('div').text()).toBe('An error occurred. Please reload the page');
  });

  test('should render children if no error throws', () => {
    const component = mount(
      <ErrorBoundary>
        <BackgroundScreen />
      </ErrorBoundary>,
    );
    const redSquare = component.find(RedSquare);
    expect(redSquare.exists()).toBe(true);
  });
});
