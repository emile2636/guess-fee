import { useState, useContext, useEffect, useCallback } from 'react';

export default function FeeCard({ type, color, est = '0', sample = 0 }) {
  return (
    <div className="flex-1 p-4">
      <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden cursor-pointer">
        <div className="p-4">
          <span
            className={`inline-block px-2 py-1 leading-none rounded-full font-semibold uppercase tracking-wide text-xs ${color}`}
          >
            {type}
          </span>
          <h2 className="mt-2 mb-2 font-bold">Priority Fee</h2>
          <h2 className="text-center text-4xl font-bold">{Number(est).toFixed(2)}</h2>
          <p className="text-sm text-center font-semibold">Gwei</p>
          <div className="mt-3 flex-col items-center"></div>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
          <span className="flex items-center">Sample from each block's effective priority fees: {sample} %</span>
        </div>
      </div>
    </div>
  );
}
