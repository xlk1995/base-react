import { RefObject, useEffect } from 'react'

export function useScrollLock(
  lock: boolean,
  containerRef?: RefObject<HTMLElement>
) {
  useEffect(() => {
    const disableScroll = (e: Event) => {
      e.preventDefault()
    }

    if (lock) {
      document.body.style.overflow = 'hidden'
      document.addEventListener(
        'touchmove',
        disableScroll,
        { passive: false }
      )
      document.addEventListener(
        'mousewheel',
        disableScroll,
        { passive: false }
      )

      if (containerRef && containerRef.current) {
        containerRef.current.style.overflow = 'auto'
        containerRef.current.addEventListener(
          'touchmove',
          e => e.stopPropagation(),
          { passive: false }
        )
      }
    } else {
      document.body.style.overflow = 'auto'
      document.removeEventListener(
        'touchmove',
        disableScroll
      )
      document.removeEventListener(
        'mousewheel',
        disableScroll
      )

      if (containerRef && containerRef.current) {
        containerRef.current.style.overflow = 'auto'
        containerRef.current.removeEventListener(
          'touchmove',
          e => e.stopPropagation()
        )
      }
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener(
        'touchmove',
        disableScroll
      )
      document.removeEventListener(
        'mousewheel',
        disableScroll
      )

      if (containerRef && containerRef.current) {
        containerRef.current.style.overflow = 'auto'
        containerRef.current.removeEventListener(
          'touchmove',
          e => e.stopPropagation()
        )
      }
    }
  }, [lock, containerRef])
}
