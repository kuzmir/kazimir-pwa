// @flow

function rafThrottler(callback: () => void) {
  let rafId = null;
  const flush = () => {
    callback();
    rafId = null;
  };

  return () => {
    if (rafId) {
      return;
    }

    rafId = requestAnimationFrame(flush);
  };
}

export default rafThrottler;
