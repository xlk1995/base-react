import { useEffect, useRef, useState } from 'react'

import { IsMobileTerminal } from '@/utils/flexible'

import { apiGetCategory } from '@/views/main/components/navigation/mobile/api'

import { ALL_CATEGORY } from '@/constants'

import { Popup } from '@/libs'

import { Menu } from '../menu'

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
    categorys.unshift(ALL_CATEGORY)
    setCategorysList(categorys)
  }
  interface ChildMethods {
    setValue: (newValue: number) => void
  }
  const handleChangeMenu = (index: number) => {
    setIsVisible(false)

    if (navRef.current) {
      navRef.current.setValue(index)
    }
  }
  const handleVisible = (visible: boolean) => {
    setIsVisible(visible)
  }
  const [isVisible, setIsVisible] = useState(false)
  const navRef = useRef<ChildMethods>(null)

  return (
    <>
      {isMobile ? (
        <MobileNavigation
          categorys={categorysList}
          handleVisible={handleVisible}
          ref={navRef}
        />
      ) : (
        <PcNavigation />
      )}
      <Popup
        handleVisible={handleVisible}
        Children={
          <Menu
            categorys={categorysList}
            handleChangeMenu={handleChangeMenu}
          />
        }
        isVisible={isVisible}
      />
    </>
  )
}

export default Navigation
