import axios, {
  AxiosError,
  InternalAxiosRequestConfig
} from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json'
  },
  timeoutErrorMessage: '请求超时, 请稍后重试'
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    return { ...config }
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    const { data, success, message } = response.data
    if (success) {
      return data
    }
    return Promise.reject(message)
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default {
  get<T>(
    url: string,
    params?: Record<string, any>
  ): Promise<T> {
    return instance.get(url, { params })
  },

  post<T>(
    url: string,
    params: Record<string, any>
  ): Promise<T> {
    return instance.post(url, params)
  }
}
