// @flow

import * as React from 'react';
import withProps from '../../utils/withProps';
import classnames from 'classnames';
import {Link, withRouter} from 'react-router-dom';
import {withLocale} from '../../utils/locale/withLocale';
import {getOpositeTimespan} from '../../utils/timespan';
import Navigation from '../navigation/Navigation';
import Flip from '../navigationIcons/Flip';
import Slider from './Slider';
import style from './detail.css';

import type {Match} from 'react-router-dom';

import type {StreetType} from '../../AppContainer';

type StreetDetailPropsType = {
  items: Array<Object>,
  streetName?: string,
  switchPath: string,
  navigationState: string,
  desktopView: boolean,
  locale: string,
};

type StreetDetailReturnedPropsType = {
  data: Array<StreetType>,
  match: Match,
  locale: string,
  desktopView: boolean,
};

const StreetDetail = ({
  items,
  streetName,
  locale,
  navigationState,
  desktopView,
  switchPath,
}: StreetDetailPropsType) => {
  const content = items.map((item, index) => (
    <div key={index} className={style.streetDetailContainer}>
      <h4 className={style.streetItemHeadline}>{item.name}</h4>
      <div className={style.imagesContainer}>
        {item.photos.length > 1 ? (
          <Slider items={item.photos} />
        ) : (
          <img src={item.photos[0].small} alt={item.name} />
        )}
      </div>
      <div className={style.itemDescriptionContainer}>
        <p className={style.streetItemDescription}>{item.description}</p>
      </div>
    </div>
  ));

  return (
    <>
      {desktopView ? (
        <div className={style.desktopDetial}>
          {content}
          <div
            className={classnames(
              style.flipIconContainer,
              style.flipIconContainerDesktop,
              navigationState === 'present'
                ? style.flipIconContainerToPast
                : style.flipIconContainerToPresent
            )}
          >
            <Link to={switchPath}>
              <Flip color="#fff" />
            </Link>
          </div>
        </div>
      ) : (
        <>
          <Navigation streetName={streetName} />
          {content}
          <div
            className={classnames(
              style.flipIconContainer,
              navigationState === 'present'
                ? style.flipIconContainerToPast
                : style.flipIconContainerToPresent
            )}
          >
            <Link to={switchPath}>
              <Flip color="#fff" />
            </Link>
          </div>
        </>
      )}
    </>
  );
};

const mapPropsToNewProps = ({
  match,
  data,
  locale,
  desktopView,
}: StreetDetailReturnedPropsType) => {
  const paramId = parseInt(match.params.id, 10);
  const selectedItem = data.find(item => item.id === paramId);
  const timespan = match.params.timespan || 'present';

  return {
    items: (selectedItem && selectedItem.places[timespan]) || [],
    streetName: selectedItem && selectedItem.name,
    locale,
    navigationState: timespan,
    desktopView,
    switchPath: `/street/${paramId}/${getOpositeTimespan(timespan)}`,
  };
};

export default withLocale()<any>(
  withRouter(
    withProps<StreetDetailReturnedPropsType, StreetDetailPropsType>(
      mapPropsToNewProps,
      StreetDetail
    )
  )
);
