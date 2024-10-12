declare module "buttons/Pagination" {
  const Pagination: React.FC<{
    totalPages: number
    currentPage: number
    onPageChange: (page: number) => void
  }>
  export default Pagination
}
