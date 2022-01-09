import { useContext, useEffect } from 'react';
import { Web3Context } from '../context/Web3Context';

export default function FeeCard() {
  const { web3 } = useContext(Web3Context);

  return <h1 className="text-5xl text-white">Fee</h1>;
}
