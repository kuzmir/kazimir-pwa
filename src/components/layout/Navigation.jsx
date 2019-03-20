// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

const isMapActive = pathname => pathname.includes('/map');

class Navigation extends React.Component<*, *> {
  render() {
    const isMapVisible = isMapActive(this.props.location.pathname);

    return (
      <nav>
        {isMapVisible ? (
          <Link to="/">switch to list</Link>
        ) : (
          <Link to="/map">switch to map</Link>
        )}
      </nav>
    );
  }
}

export default withRouter(Navigation);
