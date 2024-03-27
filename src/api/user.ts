import { Login, User } from '@/types/api'
import request from '@/utils/request'

interface LoginResultType {
  token: string
}
export function apiLogin(params: Login.Params) {
  return request.post<LoginResultType>(
    '/user/auth/login',
    params,
    { showLoading: false, showError: true }
  )
}

export function apiGetUserInfo() {
  return request.get<User.IUserInfo>(
    '/user/account/profile'
  )
}
