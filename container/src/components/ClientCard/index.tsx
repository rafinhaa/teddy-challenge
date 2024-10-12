import { formatValueToLocaleString } from "@/utils/current"

import styles from "./styles.module.css"

export type ClientCardProps = {
  name: string
  salary: number
  companyValuation: number

  children?: React.ReactNode
}

const ClientCard = ({
  name,
  salary,
  companyValuation,
  children,
}: ClientCardProps) => {
  const formattedSalary = formatValueToLocaleString(salary)
  const formattedCompanyValuation = formatValueToLocaleString(companyValuation)

  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <p>Salário: {formattedSalary}</p>
      <p>Empresa: {formattedCompanyValuation}</p>

      <footer>{children}</footer>
    </div>
  )
}

export default ClientCard
