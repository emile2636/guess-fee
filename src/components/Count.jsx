import { useCount } from '../hooks/useCount';

export default function Count() {
  const [count, reset] = useCount();

  return count;
}
