import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (<div>An error occurred. Please reload the page</div>);
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.shape().isRequired,
};

export { ErrorBoundary };
