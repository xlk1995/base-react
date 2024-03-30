import request from '@/utils/request'

import { ICategory } from './types'

type CategoryInfo = {
  categorys: ICategory[]
}
export function apiGetCategory() {
  return request.get<CategoryInfo>('/category')
}
