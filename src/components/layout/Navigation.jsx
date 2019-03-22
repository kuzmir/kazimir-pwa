// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

const isMapActive = pathname => pathname.includes('/map');
const isDetailViewActive = pathname => pathname.includes('/street');

class Navigation extends React.Component<*, *> {
  render() {
    const isMapVisible = isMapActive(this.props.location.pathname);
    const detailViewVisible = isDetailViewActive(this.props.location.pathname);

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
