import {
  Navigate,
  RouteObject,
  createBrowserRouter
} from 'react-router-dom'

import HomePage from '@/views/homePage'
import Login from '@/views/login'
import { Register } from '@/views/register'
import { Error404 } from '@/components/error403'
import { Error403 } from '@/components/error404'
import Layout from '@/layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/welcome' />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <HomePage />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '/403',
    element: <Error403 />
  }
]

const router = createBrowserRouter(routes)

export default router
