import request from '@/utils/request'

export function apiGetCategory() {
  return request.get('/category')
}
