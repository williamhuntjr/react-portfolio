import { IResponseStatus } from './http'

export interface IProject {
  id: number
  attributes: IProjectAttributes
}

export interface IProjectAttributes {
  name: string
  created_with: string
  coded: boolean
  designed: boolean
  description: string
  url: string
  created_at: Date
  updated_at: Date
  thumbnail: IProjectThumbnailData
  is_discontinued: boolean
  converted_wireframe: boolean
}

export interface IProjectMetaData {
  pagination: IProjectPagination
}

export interface IProjectPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface IProjectPaginationResponse<TData, TStatus = IResponseStatus> {
  data: TData
  meta: IProjectMetaData
  status: TStatus
}

export interface IProjectThumbnailData {
  data: IProjectThumbnailAttributes[]
}

export interface IProjectThumbnailAttributes {
  attributes: IProjectThumbnail
}

export interface IProjectThumbnail {
  alternativeText: string
  caption: string
  createdAt: Date
  updatedAt: Date
  ext: string
  hash: string
  width: number
  height: number
  name: string
  mime: string
  previewUrl: string | null
  formats: IProjectThumbnailFormat[]
  size: number
  url: string
  provider: string
  provider_metadata: [] | null
}

export interface IProjectThumbnailFormat {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path: string | null
  url: string
}