
export interface ICoincidence {
  readonly createdAt: string,
  readonly id: string,
  readonly name: string
  readonly tags: string
  readonly type: string
  total: number
}

export interface IData {
  readonly status: string,
  readonly message: string,
  readonly coincidence?: ICoincidence[],
}