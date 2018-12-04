// @flow

import * as React from 'react';
import List from './components/list/List';

const DATA_URL = 'https://kazimirapp.pl/streets.json';

type PropsType = {
  children: React.Node
};
class TestContainer extends React.Component<PropsType> {
  constructor() {
    super();
    this.state = {
      data: ''
    };
  }

  componentDidMount() {
    fetch(DATA_URL)
      .then(response => response.json())
      .then(transformedData => {
        this.setState({
          data: transformedData
        });
      });
  }

  render() {
    const {data} = this.state;

    return (
      <div>
        {!data ? (
          <div>loading here</div>
        ) : (
          data.map(item => (
            <List
              key={item.id}
              name={item.name}
              placesPast={item.places.past}
              placesPresent={item.places.present}
            />
          ))
        )}
      </div>
    );
  }
}
export default TestContainer;
