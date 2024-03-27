export namespace Login {
  export interface Params {
    credential: string
    password: string
  }
}

export interface BaseResult {
  error: string
  message: string[]
  statusCode: number
}

export namespace User {
  export interface IUserInfo {
    id: string
    nickname: string
    username: string
    phone?: string
    email?: string
    permissions?: any[]
  }
}
