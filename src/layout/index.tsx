import React from 'react'

import { Layout, theme } from 'antd'

import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import NavMenu from '@/components/NavMenu'

const { Sider, Content } = Layout

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <Layout className='h-screen'>
      <Sider trigger={null} collapsible>
        <NavMenu />
      </Sider>
      <Layout>
        <NavHeader />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          Content
        </Content>
        <NavFooter />
      </Layout>
    </Layout>
  )
}

export default App
