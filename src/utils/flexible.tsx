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
