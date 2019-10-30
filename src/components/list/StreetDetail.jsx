// @flow strict

import React from 'react';
import {slugifyStreetName} from '../../utils/url';
import classnames from 'classnames';
// $FlowFixMe https://github.com/ReactTraining/react-router/issues/6944
import {Link, useParams} from 'react-router-dom';
import {getOpositeTimespan} from '../../utils/timespan';
import Navigation from '../navigation/Navigation';
import Flip from '../navigationIcons/Flip';
import Slider from './Slider';
import style from './detail.css';
import useI18n from '../../utils/locale/i18n';

import type {StreetType} from '../../AppContainer';

type StreetDetailPropsType = {
  data: Array<StreetType>,
  desktopView?: boolean,
};

const StreetDetail = ({
  data,
  desktopView = false,
}: StreetDetailPropsType) => {
  const {locale, generateRoute} = useI18n();
  const {name = '', timespan = 'present'} = useParams();

  const selectedItem = data.find(
    item => slugifyStreetName(item.name) === name
  );
  
  const switchPath = generateRoute('STREET', {
    name,
    timespan: getOpositeTimespan(timespan),
  });
  const places = (selectedItem && selectedItem.places) || {};
  const streetName = selectedItem && selectedItem.name;
  const navigationState = timespan;

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


export default StreetDetail;
