import { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { Web3Context } from '../context/Web3Context';
import Web3 from 'web3';
import { useBlockNumber } from '../hooks/useBlockNumber';
import { useCount } from '../hooks/useCount';
import { avgBN, avg, formatFeeHistory } from '../utils';
import { FeeCard } from '.';
import { Flex, Spacer, Text } from '@chakra-ui/react';
import { BN } from 'bn.js';

const { fromWei } = Web3.utils;

export default function FeeCardContainer() {
  const context = useContext(Web3Context);
  const web3 = context?.web3;
  const blockNumber = useBlockNumber();
  const { count, reset: resetCount } = useCount();
  const [est, setEst] = useState<{
    slow: string;
    fast: string;
    avg: string;
  }>({
    slow: '0',
    fast: '0',
    avg: '0',
  });

  const fetchBlocksFee = useCallback(() => {
    if (!web3) return;
    const historicalBlocks = 24;
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

  useEffect(() => {
    fetchBlocksFee();
    resetCount();
  }, [blockNumber]);

  return (
    <Flex flexDirection={{ base: 'column' }} width="100%">
      <Flex>
        <Text fontSize="xs" color="whiteAlpha.500">
          Pending Block Number: {blockNumber}
        </Text>
        <Spacer />
        <Text fontSize="xs" color="whiteAlpha.500">
          Time since last Update: {count} Sec
        </Text>
      </Flex>
      <br />
      <Flex gap={8} flexDirection={{ base: 'column', sm: 'row' }}>
        <FeeCard key="Fast" type="Fast" est={est.fast} sample={75} />
        <FeeCard key="Avg" type="Avg" est={est.avg} sample={50} />
        <FeeCard key="Slow" type="Slow" est={est.slow} sample={25} />
      </Flex>
    </Flex>
  );
}
