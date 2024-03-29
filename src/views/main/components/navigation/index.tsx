import { IsMobileTerminal } from '@/utils/flexible'

import MobileNavigation from './mobile'
import PcNavigation from './pc'

const Navigation = () => {
  const isMobile = IsMobileTerminal()
  return (
    <>
      {isMobile ? <MobileNavigation /> : <PcNavigation />}
    </>
  )
}

export default Navigation
