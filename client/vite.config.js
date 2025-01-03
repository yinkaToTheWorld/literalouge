import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';


dotenv.config();


export default defineConfig({
  plugins: [react()],
  base: '/', 
  server: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  }
})


