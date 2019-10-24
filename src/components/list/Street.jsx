// @flow

import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {withLocale} from '../../utils/locale/withLocale';
import ArrowLeftIcon from '../navigationIcons/ArrowLeft';
import ArrowRightIcon from '../navigationIcons/ArrowRight';
import {slugifyStreetName} from '../../utils/url';

import type {RouterHistory} from 'react-router-dom';
import type {PlacesType} from '../../AppContainer';

import style from './list.css';
import usei18n from '../../utils/locale/i18n';

type PropsType = {
  name: string,
  id: number,
  mapView: boolean,
  places: PlacesType,
};

function Street({name, id, mapView, places}: PropsType) {
  const history = useHistory();
  const {generateRoute} = usei18n();
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

export default Street;
