import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

import { message } from '@/utils/AntdGlobal'

import baseConfig from '@/config'

import { BaseResult } from '@/types/api'

import storage from './storage'

const instance = axios.create({
  baseURL: baseConfig.BASE_URL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json'
  },
  timeoutErrorMessage: '请求超时, 请稍后重试'
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    // 判断有无token，没有就要跳到登录页
    const { showLoading } = config
    if (showLoading) {
      console.log('loading......')
    }
    const token = storage.get('token')
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    return { ...config }
  },
  error => {
    console.log('hidden loading')

    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    const { data } = response
    return data
  },
  (error: AxiosError) => {
    const { response, config } = error
    const { data } = response as AxiosResponse
    const { message: erMsg, statusCode } =
      data as BaseResult
    if (statusCode === 400) {
      if (config?.showError === false) {
        return Promise.resolve(data)
      }
      message.error(erMsg.toString())
    }

    return Promise.reject(error)
  }
)

interface IConfig {
  showLoading?: boolean
  showError?: boolean
}
export default {
  get<T>(
    url: string,
    params: Record<string, any>,
    options: IConfig = {
      showLoading: true,
      showError: true
    }
  ): Promise<T> {
    return instance.get(url, { params, ...options })
  },

  post<T>(
    url: string,
    params: Record<string, any>,
    options: IConfig = {
      showLoading: true,
      showError: true
    }
  ): Promise<T> {
    return instance.post(url, params, options)
  }
}
