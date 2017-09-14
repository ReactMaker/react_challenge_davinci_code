import React, { Component } from 'react';

export default (ComposedComponent) => {
  class ErrorHandler extends Component {
    state = {
      hasError: false,
    }

    componentDidCatch(error, info) {
      this.setState(state => ({ hasError: true }));
      console.error('error', error);
      console.error('info', info);
    }

    render() {
      return (
        <div>
          {
            this.state.hasError
              ? <div>Error</div>
              : <ComposedComponent />
          }
        </div>
      );
    }
  }

  return ErrorHandler;
};
