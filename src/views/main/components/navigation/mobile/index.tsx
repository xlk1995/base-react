import { FC, useRef, useState } from 'react'

import { useScroll } from 'ahooks'

import classnames from 'classnames'

import { MSvgIcon } from '@/libs'

import { PropsType } from './types'

const MobileNavigation: FC<PropsType> = props => {
  const { categorys } = props

  const sliderStyleInit = {
    transform: 'translateX(0px)',
    width: '45px'
  }

  const [sliderStyle, setSliderStyle] =
    useState(sliderStyleInit)
  //
  const refs = useRef<HTMLLIElement[]>([])
  const setRefItem = (el: HTMLLIElement) => {
    if (el) {
      refs.current.push(el)
    }
  }

  const ulRef = useRef(null)
  const ulScrollLeft = useScroll(ulRef)?.left

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (index: number) => {
    console.log(index)

    setCurrentIndex(index)
    const { left, width } =
      refs.current[index].getBoundingClientRect()
    // 滑块的位置= 滚动条的位置 + 元素left - ul的padding
    setSliderStyle({
      transform: `translateX(${ulScrollLeft! + left - 10}px)`,
      width: `${width}px`
    })
  }

  return (
    <div className='bg-white static top-0 left-0 z-10'>
      <ul
        className='relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden'
        ref={ulRef}
      >
        {/* 滑块 */}
        <li
          className='absolute h-[22px] bg-zinc-900 rounded-lg duration-200'
          style={sliderStyle}
        />
        {/* 汉堡 */}
        <li className='fixed top-0 right-[-1px] h-4 flex items-center bg-white z-20 shadow-l-white'>
          <MSvgIcon
            name='hamburger'
            className='h-1.5 w-1.5'
          />
        </li>
        {categorys.map((c, index) => {
          const commonClass =
            'px-1.5 py-[5px] z-10 duration-200 shrink-0 last:mr-1'
          const activeClass = 'text-white'
          const itemClasses = classnames({
            [commonClass]: true,
            [activeClass]: index === currentIndex
          })
          return (
            <li
              key={c.id}
              className={itemClasses}
              ref={setRefItem}
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

export default MobileNavigation
