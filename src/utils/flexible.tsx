import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@/hooks'

/**
 * 此处通过判断屏幕大小是否小于指定宽度（1280）
 */
export const IsMobileTerminal = () => {
  const { width } = useWindowSize()

  return width < PC_DEVICE_WIDTH
}
/**
 * 此处通过判断userAgent来判断，更加准确
 */
// export const isMobileTerminal = () => {
//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   )
// }

// 什么是rem， 是html的fontSize，给定一个最大值

/**
 * 动态设置rem
 */
export const UseREM = () => {
  const MAX_FONT_SIZE = 40

  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector(
      'html'
    ) as HTMLElement

    let fontSize = window.innerWidth / 10
    fontSize =
      fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize

    html.style.fontSize = `${fontSize}px`
  })
}
