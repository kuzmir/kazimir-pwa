// @flow

global.requestAnimationFrame = (callback: Function): void => {
  window.setTimeout(callback, 0);
};
