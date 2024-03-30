export interface ICategory {
  id: string
  name: string
  col?: number
  urlname?: string
}

export interface PropsType {
  categorys: ICategory[]
  handleChangeMenu?: (index: number) => void
}
