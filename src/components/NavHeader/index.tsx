import { MenuUnfoldOutlined } from '@ant-design/icons'

import { Breadcrumb, Dropdown, Switch } from 'antd'
import type { MenuProps } from 'antd'

import $styles from './index.module.scss'

const breadItems = [
  {
    title: '首页'
  },
  {
    title: '用户'
  }
]
const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        菜单一
      </a>
    )
  },
  {
    key: '2',
    label: (
      <div className='text-cyan-200'>
        退出11111111111111111111
      </div>
    )
  }
]
const NavHeader = () => (
  <div className={$styles['nav-header']}>
    <div className={$styles.left}>
      <MenuUnfoldOutlined className='pr-[10px]' />
      <Breadcrumb items={breadItems} />
    </div>
    <div className={$styles.right}>
      <Switch
        checkedChildren='默认'
        unCheckedChildren='暗黑'
        defaultChecked
      />
      <Dropdown
        menu={{ items }}
        className='pl-[10px] cursor-pointer'
        trigger={['click']}
      >
        <span>梁铙靖</span>
      </Dropdown>
    </div>
  </div>
)

export default NavHeader
