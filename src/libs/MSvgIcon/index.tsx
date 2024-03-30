import { FC } from 'react'

type PropsType = {
  name: string
  color?: string
  fillClass?: string
  className?: string
}

export const MSvgIcon: FC<PropsType> = props => {
  const { name, color, fillClass, className } = props
  const symbolId = `#icon-${name}`

  return (
    <svg aria-hidden className={className}>
      <use
        xlinkHref={symbolId}
        className={fillClass}
        fill={color}
      />
    </svg>
  )
}
