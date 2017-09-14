import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ErrorHandler from './ErrorHandler';
import Hello from './Hello';

@ErrorHandler
export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <Button>123</Button>
      </div>
    );
  }
}
