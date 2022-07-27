import { AxiosInstance } from 'axios'
import { HttpClient } from '../common/api'
import { IContactForm } from '../common/types/contact'
import { IResponse } from '../common/types/http'

export interface IContactService {
  create(formData: IContactForm): Promise<void>
}

class Service implements IContactService {
  constructor(private readonly apiClient: AxiosInstance) {}
  public async create(data: IContactForm): Promise<void>{
    await this.apiClient.post<IResponse<IContactForm[]>>('/api/contact/contact-me', data )
  }
}

export const ContactService = new Service(HttpClient)
