import { useEffect } from 'react'

import { IsMobileTerminal } from '@/utils/flexible'

import { apiGetCategory } from '@/api/category'

import MobileNavigation from './mobile'
import PcNavigation from './pc'

const Navigation = () => {
  const isMobile = IsMobileTerminal()
  useEffect(() => {
    getCategory()
  }, [])
  const getCategory = async () => {
    const res = await apiGetCategory()
    console.log(res, '---')
  }
  return (
    <>
      {isMobile ? <MobileNavigation /> : <PcNavigation />}
    </>
  )
}

export default Navigation
