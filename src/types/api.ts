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
