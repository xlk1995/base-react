import { Timeout } from 'ahooks/lib/useRequest/src/types'
import {
  FC,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react'

type PropsType = {
  Reference: JSX.Element | JSX.Element[]
  Content: JSX.Element | JSX.Element[]
  place?: keyof typeof Placement
}

enum Placement {
  TOP_LEfT = 'TOP_LEfT',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT'
}

export const Popover: FC<PropsType> = props => {
  const {
    Reference,
    Content,
    place = Placement.BOTTOM_LEFT
  } = props
  const [visible, setVisible] = useState(false)
  let timer: Timeout | null = null
  const handleMouseEnter = () => {
    setVisible(true)
    if (timer) {
      clearTimeout(timer)
    }
  }
  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setVisible(false)
      timer = null
    }, 100)
  }
  const [contentCls, setContentCls] = useState({
    top: '0px',
    left: '0px'
  })

  // 获取主元素的宽高
  function getElementSize(target: RefObject<HTMLElement>) {
    if (!target) {
      return {
        width: 0,
        height: 0
      }
    }

    const po = {
      width: target.current?.offsetWidth || 0,
      height: target.current?.offsetHeight || 0
    }

    return po
  }
  const referenceRef = useRef(null)

  const contentRef = useRef(null)
  useEffect(() => {
    if (!visible) return

    const contentWidth =
      getElementSize(contentRef)?.width || 0
    const referWidth =
      getElementSize(referenceRef)?.width || 0
    const referHeight =
      getElementSize(referenceRef)?.height || 0

    switch (place) {
      // 左上

      case Placement.TOP_LEfT:
        setContentCls({
          top: '0px',
          left: `-${contentWidth}px`
        })
        break

      // 右上
      case Placement.TOP_RIGHT:
        setContentCls({
          top: '0px',
          left: `${referWidth}px`
        })
        break
      // 左下
      case Placement.BOTTOM_LEFT:
        setContentCls({
          top: `${referHeight}px`,
          left: `-${contentWidth}px`
        })
        break
      // 右下
      case Placement.BOTTOM_RIGHT:
        setContentCls({
          top: `${referHeight}px`,
          left: `-${referWidth}px`
        })
        break
      default:
        break
    }
  }, [visible])

  return (
    <div
      className='relative cursor-pointer'
      onFocus={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={referenceRef}>{Reference}</div>
      {visible && (
        <div
          ref={contentRef}
          className='absolute  p-1 bg-white z-20 border rounded-sm'
          style={contentCls}
        >
          {Content}
        </div>
      )}
    </div>
  )
}
