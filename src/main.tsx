import React from 'react'
import ReactDOM from 'react-dom/client'
// 注册svg-icons
import 'virtual:svg-icons-register'

import '@/styles/index.css'

import App from './App.tsx'
import { UseREM } from './utils/flexible.tsx'

UseREM()

ReactDOM.createRoot(
  document.getElementById('root')!
).render(<App />)
