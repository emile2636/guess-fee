import { useState, useEffect, createContext, ReactNode } from 'react';
import Web3 from 'web3';

const KEY = import.meta.env.VITE_INFURA_KEY;
const ENDPOINT = import.meta.env.VITE_INFURA_ENDPOINT;

export interface Web3ContextType {
  web3: Web3 | undefined;
}

export const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const Web3ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [web3, setWeb3] = useState<Web3 | undefined>();
  useEffect(() => {
    const web3 = new Web3(new Web3.providers.HttpProvider(`${ENDPOINT}/${KEY}`));
    setWeb3(web3);
  }, []);

  return <Web3Context.Provider value={{ web3 }}>{children}</Web3Context.Provider>;
};
