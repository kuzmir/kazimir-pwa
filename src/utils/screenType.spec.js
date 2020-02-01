// @flow

import {getScreenType, SCREEN_MOBILE, SCREEN_DESKTOP} from './screenType';

describe('getScreenType()', () => {
  it('returns "SCREEN_MOBILE" when viewport is smaller than breakpoint', () => {
    global.window.innerWidth = 480;

    expect(getScreenType()).toEqual(SCREEN_MOBILE);
  });

  it('returns "SCREEN_DESKTOP" when viewport is greater than breakpoint', () => {
    global.window.innerWidth = 1280;

    expect(getScreenType()).toEqual(SCREEN_DESKTOP);
  });
});
