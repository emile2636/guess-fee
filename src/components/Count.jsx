import { useEffect } from 'react/cjs/react.development';
import { useCount } from '../hooks/useCount';
import { EventBus } from '../utils';

export default function Count() {
  const [count, reset] = useCount();

  useEffect(() => {
    EventBus.on('RESET_COUNT', reset);
    return EventBus.off('RESET_COUNT', reset);
  }, []);

  return count;
}
