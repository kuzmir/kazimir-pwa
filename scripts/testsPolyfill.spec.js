// @flow
import './testsPolyfill';

describe('testsPolyfill', () => {
  it('has calls setTimeout in favor of requestAnimationFrame callback', () => {
    const spy = jest.spyOn(window, 'setTimeout');
    const callback = jest.fn();

    requestAnimationFrame(callback);
    expect(spy).toHaveBeenCalledTimes(1);
  })
});
