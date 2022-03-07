import Web3 from 'web3';
export { default as EventBus } from './eventBus';

const { BN } = Web3.utils;

export function avgBN(arr) {
  const sum = arr.reduce((a, v) => a.add(v));
  return sum.div(new BN(arr.length));
}

export function avg(arr) {
  const sum = arr.reduce((a, v) => a + v);
  return Math.round(sum / arr.length);
}

export const formatFeeHistory = (history) => {
  const { reward: fees } = history;
  const blocksFee = fees.map((item) =>
    item.reduce((acc, curr) => {
      acc.push(Number(curr));
      return acc;
    }, []),
  );
  return blocksFee;
};
