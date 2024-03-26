import React from 'react'

import type { MenuProps } from 'antd'
import { Menu } from 'antd'

import { useNavigate } from 'react-router-dom'

import $styles from './index.module.scss'

// type MenuItem = Required<MenuProps>['items'][number]

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: 'group'
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type
//   } as MenuItem
// }

const items: MenuProps['items'] = [
  {
    label: '工作台',
    key: '1'
  },
  {
    label: '系统管理',
    key: '2',
    children: [
      {
        label: '用户管理',
        key: '2-1'
      }
    ]
  }
]

const App: React.FC = () => {
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e)
  }

  const nav = useNavigate()
  const handleToIndex = () => {
    console.log('111')

    nav('/welcome')
  }
  return (
    <div className={$styles['nav-menu']}>
      <div
        className={$styles.title}
        onClick={() => handleToIndex()}
      >
        首页
      </div>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['2']}
        mode='inline'
        items={items}
        theme='dark'
      />
    </div>
  )
}

export default App
