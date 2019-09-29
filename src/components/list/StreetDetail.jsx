// @flow

import * as React from 'react';
import withProps from '../../utils/withProps';
import {slugifyStreetName} from '../../utils/url';
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
  generateRoute: (string, Object | null) => string,
};

const StreetDetail = ({
  places,
  streetName,
  locale,
  navigationState,
  desktopView,
  switchPath,
}: StreetDetailPropsType) => {
  const content = Object.keys(places).map((timespan, index) => (
    <div
      key={index}
      className={classnames(
        timespan === 'present' ? style.flipCardFront : style.flipCardBack
      )}
    >
      {places[timespan].map((item, index) => (
        <div key={index}>
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
      ))}
    </div>
  ));

  return (
    <>
      {desktopView ? (
        <div className={style.desktopDetial}>
          <div
            className={classnames(
              style.flipCard,
              navigationState === 'past' ? style.flipCardFlipped : null
            )}
          >
            {content}
          </div>
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
          <div
            className={classnames(
              style.flipCard,
              navigationState === 'past' ? style.flipCardFlipped : null
            )}
          >
            {content}
          </div>
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
  generateRoute,
}: StreetDetailReturnedPropsType) => {
  const paramName = match.params.name || '';
  const selectedItem = data.find(
    item => slugifyStreetName(item.name) === paramName
  );
  const timespan = match.params.timespan || 'present';
  const switchPath = generateRoute('STREET', {
    name: paramName,
    timespan: getOpositeTimespan(timespan),
  });

  return {
    places: (selectedItem && selectedItem.places) || {},
    streetName: selectedItem && selectedItem.name,
    locale,
    navigationState: timespan,
    desktopView,
    switchPath,
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
