export default {
  get(key: string) {
    const value = localStorage.getItem(key)
    if (!value) return ''
    try {
      return JSON.parse(value)
    } catch (error) {
      return ''
    }
  },
  set<T>(key: string, value: T) {
    const v = JSON.stringify(value)
    localStorage.setItem(key, v)
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  }
}
