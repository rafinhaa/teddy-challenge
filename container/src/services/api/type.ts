export enum HttpStatusCode {
  ok = 200,
  badRequest = 400,
  notFound = 404,
  serverError = 500,
}

export type PaginateParams = {
  limit?: number
  page?: number
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body: T
}

export interface HttpClient {
  get: <T>(url: string, params?: PaginateParams) => Promise<HttpResponse<T>>
  post: <T, B = unknown>(url: string, body: B) => Promise<HttpResponse<T>>
  put: <T, B = unknown>(url: string, body: B) => Promise<HttpResponse<T>>
  patch: <T, B = unknown>(url: string, body: B) => Promise<HttpResponse<T>>
  delete: <T>(url: string) => Promise<HttpResponse<T>>
}
