import { MdRemove } from "react-icons/md"

import Button from "@/components/Button"
import ClientCard from "@/components/ClientCard"

import styles from "./styles.module.css"

const fakeClients = [
  { name: "João", salary: 2000, companyValuation: 1000 },
  { name: "Maria", salary: 3000, companyValuation: 2000 },
  { name: "Pedro", salary: 4000, companyValuation: 1500 },
  { name: "Ana", salary: 5000, companyValuation: 2500 },
  { name: "Carlos", salary: 6000, companyValuation: 3000 },
  { name: "Joaquim", salary: 7000, companyValuation: 4000 },
  { name: "Lucas", salary: 8000, companyValuation: 5000 },
  { name: "Marcelo", salary: 9000, companyValuation: 6000 },
  { name: "Rafael", salary: 10000, companyValuation: 7000 },
]

const ClientsSelected = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p>
          <strong>Clientes selecionados</strong>
        </p>
      </div>
      <section className={styles.section}>
        {fakeClients.map((client) => (
          <ClientCard
            key={client.name}
            name={client.name}
            salary={client.salary}
            companyValuation={client.companyValuation}
          >
            <button>
              <MdRemove />
            </button>
          </ClientCard>
        ))}
      </section>

      <footer className={styles.footer}>
        <Button variant="secondary">Limpar clientes selecionados</Button>
      </footer>
    </main>
  )
}

export default ClientsSelected
