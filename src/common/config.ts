export interface IGlobalConstants {
  API: string
}

export const appConfig: IGlobalConstants = {
  API: process.env.REACT_APP_API_URL || 'https://api.williamhuntjr.com',
}