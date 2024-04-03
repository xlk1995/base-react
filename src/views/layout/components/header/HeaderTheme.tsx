import { MSvgIcon, Popover } from '@/libs'
// 构建渲染数据源
const themeArr = [
  {
    id: '0',
    type: 'THEME_LIGHT',
    icon: 'theme-light',
    name: '极简白'
  },
  {
    id: '1',
    type: 'THEME_DARK',
    icon: 'theme-dark',
    name: '极夜黑'
  },
  {
    id: '2',
    type: 'THEME_SYSTEM',
    icon: 'theme-system',
    name: '跟随系统'
  }
]
const Reference = () => {
  return (
    <div>
      <MSvgIcon
        name='theme-light'
        className='w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none hover:bg-zinc-100/60 dark:hover:bg-zinc-900'
        fillClass='fill-zinc-900 dark:fill-zinc-300'
      />
    </div>
  )
}
const Content = () => {
  return (
    <div className='w-[140px] overflow-hidden'>
      {themeArr.map((item, index) => {
        return (
          <>
            <div
              key={item.id}
              className='flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800'
            >
              <MSvgIcon
                name={item.icon}
                className='w-1.5 h-1.5 mr-1'
                fillClass='fill-zinc-900 dark:fill-zinc-300'
              />
              <span className='text-zinc-800 dark:text-zinc-300 text-sm'>
                {item.name}
              </span>
            </div>
          </>
        )
      })}
    </div>
  )
}

export const HeaderTheme = () => {
  return (
    <div>
      <Popover
        Reference={Reference()}
        Content={Content()}
      />
    </div>
  )
}
