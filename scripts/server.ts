export function getServerConfig() {
  return {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': 'http://127.0.0.1:3100'
    }
  }
}
