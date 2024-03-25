type ENV = 'dev' | 'test' | 'prod'

const ENV_CONFIG: Record<ENV, any> = {
  dev: {
    BASE_URL: '/api'
  },
  test: {
    BASE_URL: 'http://localhost:3100/api'
  },
  prod: {
    BASE_URL: 'http://localhost:3100/api'
  }
}

const type: ENV =
  (document.body.dataset.env as ENV) || 'dev'

export default {
  ...ENV_CONFIG[type]
}
