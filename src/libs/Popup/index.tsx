import { FC, useRef } from 'react'

import ReactDOM from 'react-dom'

import { useScrollLock } from '@/hooks'

import $styles from './style.module.css'

type PropsType = {
  Children?: JSX.Element | JSX.Element[]
  isVisible?: boolean
  handleVisible?: (isVisible: boolean) => void
}

export const Popup: FC<PropsType> = props => {
  const { Children, isVisible, handleVisible } = props
  const contentRef = useRef(null)
  useScrollLock(isVisible || false, contentRef)
  const handleClick = () => {
    if (handleVisible) {
      handleVisible(false)
    }
  }

  return (
    <div>
      {isVisible &&
        ReactDOM.createPortal(
          <div>
            {/* 蒙版 */}

            <div
              className='fixed top-0 left-0 h-full w-full bg-black/80 z-50'
              onClick={handleClick}
            />

            {/* 包裹容器 */}
            <div
              ref={contentRef}
              className={`fixed bottom-0 left-0 w-full bg-white z-[9999]  ${$styles.content} ${isVisible ? $styles.open : ''}`}
            >
              {Children}
            </div>
          </div>,
          document.body
        )}

      <div />
    </div>
  )
}
