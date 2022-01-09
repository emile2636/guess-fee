import './App.css';
import { Web3ContextProvider } from './context/Web3Context';
import { FeeCard } from './components';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="gradient-bg-welcome">
        <div className="flex flex-col w-full justify-center items-center  py-12 px-4">
          <h1 className="text-3xl text-white py-1">Gas Fee Estimate</h1>
          <p className="mt-5 text-white font-light">for EIP-1559.</p>
        </div>
      </div>
      <Web3ContextProvider>
        <FeeCard />
      </Web3ContextProvider>
    </div>
  );
}

export default App;
