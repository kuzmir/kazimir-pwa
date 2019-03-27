// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

const isViewActive = (pathname, value) => pathname.includes(value);

class Navigation extends React.Component<*, *> {
  render() {
    const isMapVisible = isViewActive(this.props.location.pathname, '/map');
    const detailViewVisible = isViewActive(
      this.props.location.pathname,
      '/street'
    );

    return (
      <nav>
        {detailViewVisible ? (
          <Link to="/">
            <button>back</button>
          </Link>
        ) : isMapVisible ? (
          <Link to="/">
            <button>switch to list</button>
          </Link>
        ) : (
          <Link to="/map">
            <button>switch to map</button>
          </Link>
        )}
      </nav>
    );
  }
}

export default withRouter(Navigation);
