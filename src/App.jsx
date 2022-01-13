import './App.css';
import { Web3ContextProvider } from './context/Web3Context';
import { FeeCardContainer } from './components';

function App() {
  return (
    <Web3ContextProvider>
      <div className="min-h-screen bg-slate-900">
        <div className="gradient-bg-welcome">
          <div className="flex flex-col w-full justify-center items-center  py-12 px-4">
            <h1 className="text-3xl text-white font-bold py-1">Gas Fee Estimate</h1>
            <p className="mt-5 text-white font-light">for EIP-1559.</p>
          </div>
        </div>
        <FeeCardContainer />
      </div>
    </Web3ContextProvider>
  );
}

export default App;
