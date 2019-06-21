// @flow

import {
  isOnline,
  onNetworkStatusChange,
  offNetworkStatusChange
} from './networkStatusUtils';

describe('networkStatusUtils', () => {
  describe('isOnline', () => {
    it('returns false when window.navigator.onLine is false', () => {
      Object.defineProperty(window.navigator, 'onLine', {
        value: false,
        configurable: true
      });

      expect(isOnline()).toEqual(false);
    });

    it('returns true when window.navigator.onLine is true', () => {
      Object.defineProperty(window.navigator, 'onLine', {
        value: true,
        configurable: true
      });

      expect(isOnline()).toEqual(true);
    });
  });

  describe('onNetworkStatusChange', () => {
    it('adds listeners to online and offline events', () => {
      const spy = jest.spyOn(window, 'addEventListener');
      const callback = jest.fn();

      onNetworkStatusChange(callback);

      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy.mock.calls[0]).toEqual(['online', callback]);
      expect(spy.mock.calls[1]).toEqual(['offline', callback]);
    });

    it('removes listeners from online and offline events', () => {
      const spy = jest.spyOn(window, 'removeEventListener');
      const callback = jest.fn();

      offNetworkStatusChange(callback);

      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy.mock.calls[0]).toEqual(['online', callback]);
      expect(spy.mock.calls[1]).toEqual(['offline', callback]);
    });
  });
});
