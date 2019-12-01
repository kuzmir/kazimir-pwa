// @flow strict

import React from 'react';
import cx from 'classnames';
import layoutStyle from '../../layout.css';
import style from './page.css';

const Press = () => (
  <>
    <div className={style.hero} />
    <div className={cx(layoutStyle.box, layoutStyle.boxSmall, layoutStyle.boxWithoutScroll)}></div>

    <div className={cx(layoutStyle.box, layoutStyle.boxLarge)}>
      <div className={style.pageContent}>
        <h1 className={style.headline}>Press</h1>

        <div className={style.contentContainer}>
          <div className={style.pressItem}>
            <a
              className={style.pressItem}
              href="https://www.polskieradio.pl/130/2787/Artykul/1464973,Mobilny-przewodnik-po-Kazimierzu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../images/press/polskieradio.png" />
            </a>
            <p className={style.linkSubtitle}>polskie radio</p>
          </div>
          <div className={style.pressItem}>
            <a
              className={style.pressItem}
              href="https://thinkapple.pl/2015/06/16/kazimir-aplikacja-przewodnik-po-krakowskim-kazimierzu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../images/press/thinkapple.png" />
            </a>
            <p className={style.linkSubtitle}>thinkapple</p>
          </div>
          <div className={style.pressItem}>
            <a
              className={style.pressItem}
              href="https://krakow.onet.pl/zwiedzaj-krakowski-kazimierz-z-aplikacja-mobilna/c7kzg8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../images/press/onet.png" />
            </a>
            <p className={style.linkSubtitle}>onet</p>
          </div>
          <div className={style.pressItem}>
            <a
              className={style.pressItem}
              href="https://dziennikpolski24.pl/nieznany-kazimierz-na-ekranie-smartfona/ar/3885221"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../images/press/dziennik.png" />
            </a>
            <p className={style.linkSubtitle}>dziennik polski</p>
          </div>
          <div className={style.pressItem}>
            <a
              className={style.pressItem}
              href="https://naszemiasto.pl/odkryj-polsko-zydowski-kazimierz-w-krakowie-powstaje/ar/c13-4528272"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../images/press/wiadomosci.png" />
            </a>
            <p className={style.linkSubtitle}>wiadomości 24</p>
          </div>
          <div className={style.pressItem}>
            <a
              className={style.pressItem}
              href="https://turystyka.wp.pl/kazimir-aplikacja-przewodnik-po-krakowskim-kazimierzu-6044401464529537a?ticaid=114eef"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../images/press/wp.png" />
            </a>
            <p className={style.linkSubtitle}>wp</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Press;
