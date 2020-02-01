// @flow

export const SCREEN_MOBILE = 'SCREEN_MOBILE';
export const SCREEN_DESKTOP = 'SCREEN_DESKTOP';
const BREAKPOINT = 1024;

export type ScreenType = 'SCREEN_MOBILE' | 'SCREEN_DESKTOP';

function widthToScreenType(width: number): ScreenType {
  if (width <= BREAKPOINT) {
    return SCREEN_MOBILE;
  }

  return SCREEN_DESKTOP;
}

export function getScreenType(): ScreenType {
  return widthToScreenType(window.innerWidth);
}
