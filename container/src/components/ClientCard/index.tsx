//material
import { HiTrash } from "react-icons/hi"
import { MdAdd, MdCreate } from "react-icons/md"

import styles from "./styles.module.css"

const formatValueToLocaleString = (value: number) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

export type ClientCardProps = {
  name: string
  salary: number
  companyValuation: number

  onAdd?: () => void
  onEdit?: () => void
  onDelete?: () => void
}

const ClientCard = ({
  name,
  salary,
  companyValuation,
  onAdd,
  onEdit,
  onDelete,
}: ClientCardProps) => {
  const formattedSalary = formatValueToLocaleString(salary)
  const formattedCompanyValuation = formatValueToLocaleString(companyValuation)

  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <p>Salário: {formattedSalary}</p>
      <p>Empresa: {formattedCompanyValuation}</p>

      <footer>
        <button onClick={onAdd}>
          <MdAdd />
        </button>

        <button>
          <MdCreate onClick={onEdit} />
        </button>

        <button onClick={onDelete}>
          <HiTrash />
        </button>
      </footer>
    </div>
  )
}

export default ClientCard
