import axios from 'axios'
import { appConfig } from './config'

// Set the base URL globally so each component only has to
// request their endpoint, such as /task, to avoid embedding
// the URL in a bunch of places
export const HttpClient = axios.create({
  baseURL: appConfig.API,
})