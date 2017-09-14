import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = theme => ({
  button: {
    background: theme.colorPrimary,
    '& $span': {
      color: 'red',
    }
  },
});

@injectSheet(styles)
export default class Hello extends Component {
  static propTypes = {
    classes: PropTypes.object,
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="hello">
        <button
          className={classes.button}
        >
          <span>
            Test
            <span>
              Test2
            </span>
          </span>
        </button>
      </div>
    );
  }
}
