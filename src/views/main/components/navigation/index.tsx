import { useEffect, useState } from 'react'

import { IsMobileTerminal } from '@/utils/flexible'

import { apiGetCategory } from '@/views/main/components/navigation/mobile/api'

import MobileNavigation from './mobile'
import PcNavigation from './pc'
import { ICategory } from './mobile/types'

const Navigation = () => {
  const [categorysList, setCategorysList] = useState<
    ICategory[]
  >([])
  const isMobile = IsMobileTerminal()
  useEffect(() => {
    getCategory()
  }, [])
  const getCategory = async () => {
    const { categorys } = await apiGetCategory()
    setCategorysList(categorys)
  }
  return (
    <>
      {isMobile ? (
        <MobileNavigation categorys={categorysList} />
      ) : (
        <PcNavigation />
      )}
    </>
  )
}

export default Navigation
