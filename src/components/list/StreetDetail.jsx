// @flow

import * as React from 'react';
import withProps from '../../utils/withProps';
import classnames from 'classnames';
import {Link, withRouter} from 'react-router-dom';
import {withLocale} from '../../utils/locale/withLocale';
import {getOpositeTimespan} from '../../utils/timespan';
import Navigation from '../navigation/Navigation';
import Flip from '../navigationIcons/Flip';
import style from './detail.css';

type StreetType = {
  details?: Array<any>,
  id?: number,
  photos?: Array<any>,
  updated_at?: string,
};

type PropsType = {
  items: Array<StreetType>,
  streetName: string,
  switchPath: string,
  navigationState: string,
};

const StreetDetail = ({
  items,
  streetName,
  locale,
  navigationState,
  switchPath,
}: PropsType) => (
  <>
    <Navigation streetName={streetName} />
    <div
      className={classnames(
        style.fcBox,
        navigationState === 'present' ? style.fcBoxFlipped : null
      )}
    >
      <div
        className={classnames(
          style.fcBoxCard,
          navigationState === 'present' ? style.fcBoxCardFlipped : null
        )}
      >
        {items.map((item, index) => (
          <div key={index} className={style.streetDetailContainer}>
            <h4 className={style.streetItemHeadline}>
              {item.details[locale].name}
            </h4>
            <div className={style.imagesContainer}>
              <img
                src={item.photos[0].images.tiny}
                alt={item.details[locale].name}
              />
            </div>
            <div className={style.itemDescriptionContainer}>
              <p className={style.streetItemDescription}>
                {item.details[locale].description}
              </p>
            </div>
          </div>
        ))}
      </div>
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
);

const mapPropsToNewProps = ({match, data, locale}) => ({
  items: data.find(item => item.id === ~~match.params.id).places[
    match.params.timespan
  ],
  streetName: data.find(item => item.id === ~~match.params.id).name,
  locale,
  navigationState: match.params.timespan,
  switchPath: `/street/${match.params.id}/${getOpositeTimespan(
    match.params.timespan
  )}`,
});

export default withLocale()(
  withRouter(withProps(mapPropsToNewProps, StreetDetail))
);
