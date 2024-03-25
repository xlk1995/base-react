// src/app.tsx

import { ConfigProvider, theme, App as AntdApp } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import 'dayjs/locale/zh-cn'
import zhCN from 'antd/locale/zh_CN'

import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import $styles from './app.module.scss'
// 包装应用的时候需要使用StyleProvider取消Antd的降权（同样是为了防止tailwind与antd产生样式冲突），并且在ConfigProvider中把背景取消，然后换个紧凑皮肤theme.defaultAlgorithm
import router from './router'
import AntdGlobal from './utils/AntdGlobal'

const App: FC = () => {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#00B96B'
        },
        components: {
          Layout: {
            colorBgBody: ''
          }
        }
      }}
    >
      <StyleProvider hashPriority='high'>
        <AntdApp>
          <AntdGlobal />
          <div className={$styles.app}>
            <RouterProvider router={router} />
          </div>
        </AntdApp>
      </StyleProvider>
    </ConfigProvider>
  )
}
export default App
