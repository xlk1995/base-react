import { FC } from 'react'

import { PropsType } from './types'

export const Menu: FC<PropsType> = props => {
  const { categorys, handleChangeMenu } = props
  const handleClick = (index: number) => {
    if (handleChangeMenu) {
      handleChangeMenu(index)
    }
  }
  return (
    <div className='text-sm h-[80vh] px-2'>
      <h2 className='py-2 sticky'>所有分类</h2>
      <ul className='flex flex-col'>
        {categorys.map((c, index) => {
          return (
            <li
              key={c.id}
              className='text-sm py-1'
              onClick={() => handleClick(index)}
            >
              {c.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
