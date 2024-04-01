import { FC } from 'react'
import classNames from 'classnames'

import { MSvgIcon } from '..'
// 只写两种样式的按钮，圆的带图标的和普通图标

type PropsType = {
  onClick?: () => void
  className?: string
  disabled?: boolean
  size?: SizeType
  icon?: string
  color?: string
  fillClass?: string
  iconClass?: string
}

const sizeEnum = {
  small: '',
  middle: 'h-1.5 w-1.5',
  large: ''
}

const typeEnum = {
  'icon-default':
    'h-3 w-3 flex items-center justify-center rounded-lg bg-red-500 hover:bg-red-400'
}

type SizeType = keyof typeof sizeEnum

export const MButton: FC<PropsType> = props => {
  const {
    onClick,
    className = '',

    size = 'middle',
    icon,
    fillClass,
    iconClass = '',
    color,
    disabled
  } = props

  const btnCls = typeEnum['icon-default']
  const disCls = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : ''
  const cls = classNames({
    [className]: true,
    [btnCls]: true,
    [disCls]: true
  })

  const iconCls = classNames({
    [iconClass]: true,
    [sizeEnum[size]]: true
  })
  return (
    <button
      onClick={onClick}
      className={cls}
      disabled={disabled}
    >
      {icon && (
        <MSvgIcon
          name={icon}
          fillClass={fillClass}
          className={iconCls}
          color={color}
        />
      )}
    </button>
  )
}
