// src/app.tsx

import { FC } from 'react'

import { RouterProvider } from 'react-router-dom'

import $styles from './app.module.css'
import genRouter from './router'

const App: FC = () => {
  return (
    <div className={$styles.app}>
      <div className={$styles.container}>
        <RouterProvider router={genRouter()} />
      </div>
    </div>
  )
}
export default App
