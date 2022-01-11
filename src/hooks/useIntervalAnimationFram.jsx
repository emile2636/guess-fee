import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { useState } from 'react/cjs/react.development';

export const useIntervalAnimationFram = (callback, delay = null) => {
  const savedCallback = useRef(callback);
  const requestId = useRef(0);
  const [localTime, setLocalTime] = useState(0);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const tick = () => {
    requestId.current = window.requestAnimationFrame((t) => {
      if (!localTime) return setLocalTime(t);
      if (t - localTime >= delay) {
        savedCallback.current();
        setLocalTime(t);
      } else {
        tick();
      }
    });
  };

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }
    tick();
    return () => cancelAnimationFrame(requestId.current);
  }, [delay, localTime]);
};
