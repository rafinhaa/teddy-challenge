export type Client = {
  id: string
  name: string
  salary: number
  companyValuation: number
}

export type ClientRequest = {
  clients: Client[]
  currentPage: number
  totalPages: number
}
