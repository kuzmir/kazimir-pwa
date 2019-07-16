// @flow

import * as React from 'react';
import {
  isOnline,
  onNetworkStatusChange,
  offNetworkStatusChange
} from './networkStatusUtils';

const {Provider, Consumer} = React.createContext();

// export type NetworkStatusContextPropsType = {
//   children: React.Node
// };

export type NetworkStatusPropsType = {};

type NetworkStatusStateType = {
  online: string
};

export const NetworkStatusContextConsumer = Consumer;
export class NetworkStatusContextProvider extends React.Component<
  NetworkStatusPropsType,
  NetworkStatusStateType
> {
  state = {
    online: isOnline()
  };

  componentWillMount() {
    onNetworkStatusChange(this.handleNetworkStatusChange);
  }

  componentWillUnmount() {
    offNetworkStatusChange(this.handleNetworkStatusChange);
  }

  handleNetworkStatusChange = () => this.setState(() => ({
    online: isOnline()
  }))

  render() {
    return (
      <Provider value={{
        online: this.state.online
      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export default NetworkStatusContextProvider;
