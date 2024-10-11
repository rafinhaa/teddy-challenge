import styles from "./styles.module.css"

export type PaginationProps = {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const startPage = Math.max(1, currentPage - 2)
  const endPage = Math.min(totalPages, currentPage + 2)

  const pages = [
    {
      page: currentPage - 1,
      show: currentPage > 2 && currentPage - 1,
    },
    {
      page: currentPage,
      show: true,
    },
    {
      page: currentPage + 1,
      show: currentPage < totalPages - 1,
    },
  ]

  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <>
          <button onClick={() => onPageChange(1)}>1</button>
          {startPage > 1 && (
            <span>
              <strong>...</strong>
            </span>
          )}
        </>
      )}

      {pages.map(({ page, show }) => {
        if (!show) return
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={currentPage === page ? styles.active : ""}
          >
            {page}
          </button>
        )
      })}

      {currentPage < totalPages && (
        <>
          {endPage < totalPages && (
            <span>
              <strong>...</strong>
            </span>
          )}
          <button onClick={() => onPageChange(totalPages)}>{totalPages}</button>
        </>
      )}
    </div>
  )
}

export default Pagination
