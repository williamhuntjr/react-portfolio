export type Nullable<T> = T | null

export interface IResponse<TData, TStatus = IResponseStatus> {
  data: TData
  status: TStatus
}

export interface IResponseStatus {
  code: string
  message: string
}

export interface IResponseStatusPagination extends IResponseStatus {
  totalrowcount: number
}

export interface IPaginationResponse<TData> {
  data: TData[] | object
  status: IResponseStatusPagination
}

export interface IPaginationData<TData> {
  data: TData[]
  total: number
}

export interface IPaginationParams {
  limit: number
  page: number
}