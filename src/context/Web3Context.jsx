import { useState, useEffect, createContext } from 'react';
import Web3 from 'web3';

const KEY = import.meta.env.VITE_INFURA_KEY;
const NET = import.meta.env.VITE_INFURA_NET;

export const Web3Context = createContext();

export const Web3ContextProvider = ({ children }) => {
  const [web3, setWeb3] = useState();

  useEffect(() => {
    const web3 = new Web3(new Web3.providers.HttpProvider(`https://${NET}.infura.io/v3/${KEY}`));
    setWeb3(web3);
  }, []);

  return <Web3Context.Provider value={{ web3 }}>{children}</Web3Context.Provider>;
};
