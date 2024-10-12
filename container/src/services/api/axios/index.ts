import axios from "axios"

import { HttpClient, PaginateParams } from "../type"

const axiosInstance = axios.create({
  baseURL: "/api",
})

const api = axiosInstance

export class Axios implements HttpClient {
  get = async <T>(url: string, params?: PaginateParams) => {
    const response = await api.get<T>(url, { params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }

  post = async <T, B = unknown>(url: string, body: B) => {
    const response = await api.post<T>(url, body)
    return {
      statusCode: response.status,
      body: response.data,
    }
  }

  put = async <T, B = unknown>(url: string, body: B) => {
    const response = await api.put<T>(url, body)
    return {
      statusCode: response.status,
      body: response.data,
    }
  }

  patch = async <T, B = unknown>(url: string, body: B) => {
    const response = await api.patch<T>(url, body)
    return {
      statusCode: response.status,
      body: response.data,
    }
  }

  delete = async <T>(url: string) => {
    const response = await api.delete<T>(url)
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}
