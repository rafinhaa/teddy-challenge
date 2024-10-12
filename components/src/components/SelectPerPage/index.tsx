import styles from "./styles.module.css"

export type SelectPerPageProps = {
  clientsPerPage: number
  handleClientsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectPerPage = ({
  clientsPerPage,
  handleClientsPerPageChange,
}: SelectPerPageProps) => {
  return (
    <select onChange={handleClientsPerPageChange} className={styles.select}>
      {[5, 10, 15].map((item) => (
        <option key={item} value={item} selected={item === clientsPerPage}>
          {item}
        </option>
      ))}
    </select>
  )
}

export default SelectPerPage
