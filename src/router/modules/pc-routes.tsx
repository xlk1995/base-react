import type { RouteObject } from 'react-router-dom'

import { Layout } from '@/views/layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />
  }
]

export default routes
