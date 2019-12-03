// @flow strict

import React, {useRef, useEffect} from 'react';
import {slugifyStreetName} from '../../utils/url';
import cx from 'classnames';
// $FlowFixMe https://github.com/ReactTraining/react-router/issues/6944
import {Link, useParams, useHistory} from 'react-router-dom';
import {getOpositeTimespan} from '../../utils/timespan';
import Navigation from '../navigation/Navigation';
import ArrowRight from '../navigationIcons/ArrowRight';
import ArrowLeft from '../navigationIcons/ArrowLeft';
import Flip from '../navigationIcons/Flip';
import Slider from './Slider';
import navStyle from '../navigation/navigation.css';
import style from './detail.css';
import {useI18n} from '../../utils/locale/I18n';

import type {StreetType} from '../../AppContainer';

type StreetDetailPropsType = {
  data: Array<StreetType>,
  className?: string,
};

const StreetDetail = (props: StreetDetailPropsType) => {
  const {data, className} = props;
  const {locale, generateRoute} = useI18n();
  const {name = '', timespan = 'present'} = useParams();

  const selectedItem = data.find(item => slugifyStreetName(item.name) === name);

  const switchPath = generateRoute('STREET', {
    name,
    timespan: getOpositeTimespan(timespan),
  });
  const places = (selectedItem && selectedItem.places) || {};
  const streetName = (selectedItem && selectedItem.name) || '';
  const navigationState = timespan;

  return (
    <div className={cx(className)}>
      <div style={{position: 'relative'}}>
        <div
          className={cx(style.flipCard, {
            [`${style.flipCardFlipped}`]: navigationState === 'past',
          })}
        >
          {Object.keys(places).map((timespan, index) => (
            <div
              key={index}
              className={cx(
                timespan === 'present'
                  ? style.flipCardFront
                  : style.flipCardBack
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
                    <p className={style.streetItemDescription}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div
          className={cx(
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
      </div>
    </div>
  );
};

export default StreetDetail;
