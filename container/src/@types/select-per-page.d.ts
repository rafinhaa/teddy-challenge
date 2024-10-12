declare module "buttons/SelectPerPage" {
  const Pagination: React.FC<{
    clientsPerPage: number
    handleClientsPerPageChange: (
      e: React.ChangeEvent<HTMLSelectElement>,
    ) => void
  }>
  export default Pagination
}
