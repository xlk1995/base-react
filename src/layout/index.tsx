import React from 'react'

import { Layout } from 'antd'

import { Outlet } from 'react-router-dom'

import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import NavMenu from '@/components/NavMenu'

import $styles from './index.module.scss'

const { Sider, Content } = Layout

const App: React.FC = () => {
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
      </Layout>
    </Layout>
  )
}

export default App
