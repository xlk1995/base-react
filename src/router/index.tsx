import { createBrowserRouter } from 'react-router-dom'

import { IsMobileTerminal } from '@/utils/flexible'

import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'

function genRouter() {
  const routes = IsMobileTerminal()
    ? mobileRoutes
    : pcRoutes
  const router = createBrowserRouter(routes)
  return router
}

export default genRouter
