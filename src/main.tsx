import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <NextUIProvider>
        <main className=''>
          <App />
        </main>
      </NextUIProvider>
    </RecoilRoot>
  </React.StrictMode>
)
