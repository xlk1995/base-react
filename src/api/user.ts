import { Login } from '@/types/api'
import request from '@/utils/request'

interface LoginResultType {
  token: string
}
export function login(params: Login.Params) {
  return request.post<LoginResultType>(
    '/user/auth/login',
    params,
    { showLoading: false, showError: true }
  )
}
