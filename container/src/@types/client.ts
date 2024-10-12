export type Client = {
  id: number
  name: string
  salary: number
  companyValuation: number
}

export type ClientRequest = {
  clients: Client[]
  currentPage: number
  totalPages: number
}
