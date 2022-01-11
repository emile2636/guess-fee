import { useState } from 'react/cjs/react.development';
import { useIntervalAnimationFram } from './useIntervalAnimationFram';

export const useCount = () => {
  const [count, setCount] = useState(0);
  useIntervalAnimationFram(() => setCount(count + 1), 1000);
  const reset = () => setCount(0);
  return [count, reset];
};
