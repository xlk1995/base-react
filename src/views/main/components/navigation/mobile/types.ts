export interface ICategory {
  id: string
  name: string
  col?: number
  urlname?: string
}

export interface PropsType {
  categorys: ICategory[]
  handleVisible?: (isVisible: boolean) => void
  isVisible?: boolean
}
