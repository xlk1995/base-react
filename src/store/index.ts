import { create } from 'zustand'

import { User } from '@/types/api'

const useUserStore = create<{
  token: string
  userInfo: User.IUserInfo
  setStoreUserInfo: (userInfo: User.IUserInfo) => void
}>(set => ({
  token: '',
  userInfo: {
    id: '',
    username: '',
    nickname: ''
  },
  setStoreUserInfo: (userInfo: User.IUserInfo) =>
    set({ userInfo })
}))

export default useUserStore
