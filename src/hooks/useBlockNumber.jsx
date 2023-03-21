import { useContext, useEffect, useState, useCallback, useRef } from 'react';
import { Web3Context } from '../context/Web3Context';
import Web3 from 'web3';
import { useInterval } from '../hooks/useInterval';

export const useBlockNumber = () => {
  const { web3 } = useContext(Web3Context);
  const [blocksNumber, setBlockNumber] = useState(0);

  const getBlock = () => {
    web3.eth.getBlock('pending').then((block) => {
      if (blocksNumber === block.number) return;
      setBlockNumber(block.number);
    });
  };

  useEffect(() => {
    if (!web3) return;
    getBlock();
  }, [web3]); // getBlock first time

  useInterval(getBlock, 5000); // interval every 10s

  return blocksNumber;
};
