import { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Web3Context } from '../context/Web3Context';
import Web3 from 'web3';
import { useBlockNumber } from '../hooks/useBlockNumber';
import { useCount } from '../hooks/useCount';
import { avgBN, avg, formatFeeHistory } from '../utils';
import { FeeCard } from '.';
import { Count } from '.';

const { BN, toBN, fromWei } = Web3.utils;

const colorSet = {
  slow: 'bg-orange-200 text-orange-800',
  avg: 'bg-lime-400 text-lime-700',
  fast: 'bg-purple-600 text-purple-100',
};

export default function FeeCardContainer() {
  const { web3 } = useContext(Web3Context);
  const blockNumber = useBlockNumber();
  const [est, setEst] = useState({});
  const [countKey, setCountKey] = useState(true);

  const fetchBlocksFee = useCallback(() => {
    if (!web3) return;
    const historicalBlocks = 4;
    web3.eth.getFeeHistory(historicalBlocks, 'pending', [25, 50, 75]).then((feeHistory) => {
      const blocksFee = formatFeeHistory(feeHistory);
      const slow = avgBN(blocksFee.map((f) => new BN(f[0])));
      const average = avgBN(blocksFee.map((f) => new BN(f[1])));
      const fast = avgBN(blocksFee.map((f) => new BN(f[2])));

      const slowN = avg(blocksFee.map((b) => b[0]));
      const averageN = avg(blocksFee.map((b) => b[1]));
      const fastN = avg(blocksFee.map((b) => b[2]));

      console.log('Manual estimate:', {
        slow: fromWei(slow, 'Gwei'),
        average: fromWei(average, 'Gwei'),
        fast: fromWei(fast, 'Gwei'),
        slowN,
        averageN,
        fastN,
      });

      setEst({ slow: fromWei(slow, 'Gwei'), avg: fromWei(average, 'Gwei'), fast: fromWei(fast, 'Gwei') });
    });
  }, [web3]);

  const resetCount = () => {
    setCountKey(!countKey);
  };

  useEffect(() => {
    fetchBlocksFee();
    resetCount();
  }, [blockNumber]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex-1 p-8 text-white">
        <p>Pending Block Number: {blockNumber}</p>
        <p>
          Time since last Update: <Count key={countKey} /> Sec
        </p>
      </div>
      <div className="w-3/4 flex flex-col md:flex-row justify-around items-center p-8">
        <FeeCard key="Fast" type="Fast" color={colorSet.fast} est={est.fast} sample={75} />
        <FeeCard key="Avg" type="Avg" color={colorSet.avg} est={est.avg} sample={50} />
        <FeeCard key="Slow" type="Slow" color={colorSet.slow} est={est.slow} sample={25} />
      </div>
    </div>
  );
}
