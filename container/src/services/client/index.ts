import { Client, ClientRequest } from "@/@types/client"

import { HttpClient, PaginateParams } from "../api/type"

async function getClients(api: HttpClient, { page, limit }: PaginateParams) {
  const response = await api.get<ClientRequest>(
    `/users?page=${page}&limit=${limit}`,
  )

  return response.body
}

async function createClient(
  api: HttpClient,
  {
    name,
    salary,
    companyValuation,
  }: Pick<Client, "name" | "salary" | "companyValuation">,
) {
  const response = await api.post<Client>("/users", {
    name,
    salary,
    companyValuation,
  })

  return response.body
}

async function updateClient(
  api: HttpClient,
  { id, name, salary, companyValuation }: Client,
) {
  const response = await api.patch<Client>(`/users/${id}`, {
    name,
    salary,
    companyValuation,
  })

  return response.body
}

async function deleteClient(api: HttpClient, id: number) {
  const response = await api.delete(`/users/${id}`)

  return response.body
}

export const userApi = {
  getClients,
  createClient,
  updateClient,
  deleteClient,
}
