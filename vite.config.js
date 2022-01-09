import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Buffer from 'buffer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { web3: path.resolve(__dirname, './node_modules/web3/dist/web3.min.js') } },
});
