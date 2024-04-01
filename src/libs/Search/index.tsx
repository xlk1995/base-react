import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useRef,
  useState
} from 'react'

import { useClickAway } from 'ahooks'

import { MButton, MSvgIcon } from '..'

// 监听以下事件: clear focus blur search

type PropsType = {
  inputVal: string
  Children?: JSX.Element | JSX.Element[]
  onChange?: (val: string) => void
  onSearch?: (val: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onClear?: () => void
}

export const Search: FC<PropsType> = props => {
  const {
    inputVal,
    onChange,
    onBlur,
    onClear,
    onFocus,
    onSearch,
    Children
  } = props

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const str = e.target.value
    if (onChange) {
      onChange(str)
    }
  }
  const handleClear = () => {
    if (onChange) {
      onChange('')
    }
    if (onClear) onClear()
  }
  const handleSearch = () => {
    console.log(111)

    if (onSearch) onSearch(inputVal)
  }
  const handleBlur = () => {
    if (onBlur) onBlur()
  }

  const handleKey = (
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }
  const handleFocus = () => {
    setIsFocus(true)
    if (onFocus) onFocus()
  }

  // 是否聚焦
  const [isFocus, setIsFocus] = useState(false)
  const containerRef = useRef(null)
  // 这个hooks可以监听点击指定ref的回调事件
  useClickAway(() => {
    setIsFocus(false)
  }, containerRef)

  return (
    <div
      className='group relative p-1 rounded-xl border-white hover:bg-red-100/40 duration-500'
      ref={containerRef}
    >
      {/* icon */}
      <MSvgIcon
        name='search'
        className='absolute top-[50%] translate-y-[-50%] left-2 h-1.5 w-1.5'
        color='#707070'
      />
      {/* 输入框 */}
      <input
        type='text'
        className='block h-[44px] w-full pl-4 rounded-xl outline-0 border border-b-yellow-50 bg-zinc-100 caret-zinc-400 
        text-sm font-semibold tracking-wider group-hover:bg-white group-hover:border-zinc-200 duration-500 focus:border-red-300'
        value={inputVal}
        onChange={e => handleChange(e)}
        onBlur={handleBlur}
        onKeyUp={e => handleKey(e)}
        onFocus={handleFocus}
      />
      {/* 清空标签 */}
      {inputVal && (
        <div onClick={handleClear}>
          <MSvgIcon
            name='input-delete'
            className='absolute top-[50%] translate-y-[-50%] right-9 h-1.5 w-1.5 cursor-pointer duration-500'
          />
        </div>
      )}

      {/* 分割线 */}
      <div className=' absolute top-[50%] translate-y-[-50%] right-[64px] h-1.5 w-[1px]  bg-zinc-200 opacity-0 group-hover:opacity-100' />
      {/* 搜索按钮 todo  */}
      <div className='absolute top-[50%] translate-y-[-50%] right-2'>
        <MButton
          onClick={handleSearch}
          icon='search'
          color='#fff'
        />
      </div>

      {Children && isFocus && (
        <div
          className='absolute top-[100%] w-full max-h-[384px] left-0 p-2 bg-white rounded border
         border-zinc-200 hover:shadow-3xl overflow-auto scrollbar-thin scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent'
        >
          {Children}
        </div>
      )}
    </div>
  )
}
