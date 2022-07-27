import { AxiosInstance } from 'axios'
import { HttpClient } from '../common/api'
import { IProject, IProjectPaginationResponse } from '../common/types/projects'
import { IPaginationParams, IResponseStatus } from '../common/types/http'

export interface IProjectService {
  getAll(params: IPaginationParams): Promise<IProjectPaginationResponse<IProject[], IResponseStatus>>
}

const qs = require('qs')

class Service implements IProjectService {
  constructor(private readonly apiClient: AxiosInstance) {}
  public async getAll(params: IPaginationParams): Promise<IProjectPaginationResponse<IProject[], IResponseStatus>>{
    const query = qs.stringify({
      sort: ['is_discontinued'],
      pagination: {
        page: params.page,
        pageSize: params.limit,
      },
    }, {
      encodeValuesOnly: true,
    })
    const resp = await this.apiClient.get<IProjectPaginationResponse<IProject[]>>(`/api/projects?${query}&populate=*`)
    return resp.data
  }
}

export const ProjectService = new Service(HttpClient)
