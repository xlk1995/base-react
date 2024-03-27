import React, { useEffect } from 'react'

import { Layout } from 'antd'

import { Outlet } from 'react-router-dom'

import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import NavMenu from '@/components/NavMenu'

import { apiGetUserInfo } from '@/api/user'

import useUserStore from '@/store'

import $styles from './index.module.scss'

const { Sider, Content } = Layout

const App: React.FC = () => {
  useEffect(() => {
    getUserInfo()
  }, [])
  const state = useUserStore()
  const getUserInfo = async () => {
    const data = await apiGetUserInfo()
    state.setStoreUserInfo(data)
  }

  return (
    <Layout className='h-screen'>
      <Sider trigger={null} collapsible>
        <NavMenu />
      </Sider>
      <Layout>
        <NavHeader />
        <Content className={$styles.content}>
          <Outlet />
          <NavFooter />
        </Content>
        <NavFooter />
      </Layout>
    </Layout>
  )
}

export default App
