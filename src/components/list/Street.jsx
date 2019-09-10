// @flow

import * as React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {withLocale} from '../../utils/locale/withLocale';
import ArrowLeftIcon from '../navigationIcons/ArrowLeft';
import ArrowRightIcon from '../navigationIcons/ArrowRight';
import {slugifyStreetName} from '../../utils/url';

import type {Match, RouterHistory} from 'react-router-dom';
import type {PlacesType} from '../../AppContainer';

import style from './list.css';

type PropsType = {
  history: RouterHistory,
  match: Match,
  name: string,
  id: number,
  mapView: boolean,
  places: PlacesType,
  generateRoute: (string, Object | null) => string,
};

class Street extends React.Component<PropsType> {
  render() {
    const {name, id, mapView, places, match, history, generateRoute} = this.props;
    const slugName = slugifyStreetName(name);
    const path = generateRoute('MAP', {name: slugName})

    const itemBackgroundStylesList = {
      backgroundImage: `url(${places.present[0].photos[0].small})`,
      backgroundSize: '100%',
      backgroundPosition: 'center center',
      minHeight: '100px',
    };

    return (
      <div
        className={style.listItem}
        style={!mapView ? itemBackgroundStylesList : null}
      >
        <div
          className={style.listItemCover}
          onClick={mapView ? () => history.push(path) : null}
        />
        <Link
          to={generateRoute('STREET', {
            name: slugName,
            timespan: 'past'
          })}
          className={style.listItemNavIcon}
        >
          <ArrowLeftIcon color="white" />
        </Link>
        <h3 className={style.listItemName}>{name}</h3>
        <Link
          to={generateRoute('STREET', {
            name: slugName,
            timespan: 'present'
          })}
          className={style.listItemNavIcon}
        >
          <ArrowRightIcon color="white" />
        </Link>
      </div>
    );
  }
}

export default withRouter(withLocale()(Street));
