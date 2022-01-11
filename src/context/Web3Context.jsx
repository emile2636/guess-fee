import { useState, useEffect, createContext } from 'react';
import Web3 from 'web3';

export const Web3Context = createContext();

export const Web3ContextProvider = ({ children }) => {
  const [web3, setWeb3] = useState();

  useEffect(() => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/57060a4e35a047f8834203ba9c2e0472'),
    );
    setWeb3(web3);
  }, []);

  return <Web3Context.Provider value={{ web3 }}>{children}</Web3Context.Provider>;
};
