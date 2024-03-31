import { HeaderMy } from './HeaderMy'
import { HeaderTheme } from './HeaderTheme'
import { HeaderSearch } from './headerSearch'
import $styles from './header.module.css'

export const Header = () => {
  return (
    <div
      className={`flex items-center h-[72px] px-1 w-full ${$styles.border}`}
    >
      <img
        alt='logo'
        src='https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png'
        className=' h-4 w-4 cursor-pointer'
      />

      <div className='ml-2 flex-1 '>
        <HeaderSearch />
      </div>
      <div className='ml-2'>
        <HeaderTheme />
      </div>
      <div className=' ml-2'>
        <HeaderMy />
      </div>
    </div>
  )
}
