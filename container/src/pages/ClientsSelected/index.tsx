import { MdRemove } from "react-icons/md"

import Button from "@/components/Button"
import ClientCard from "@/components/ClientCard"
import { useSelectedClient } from "@/context/selected-client"

import styles from "./styles.module.css"

const ClientsSelected = () => {
  const { selectedClients, onRemoveSelectedClient, onClearAllSelectedClients } =
    useSelectedClient()

  const hasSelectedClients = selectedClients.length > 0

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p>
          <strong>Clientes selecionados:</strong>
        </p>
      </div>
      <section className={styles.section}>
        {selectedClients.map((client) => (
          <ClientCard
            key={client.id}
            name={client.name}
            salary={client.salary}
            companyValuation={client.companyValuation}
          >
            <button>
              <MdRemove onClick={() => onRemoveSelectedClient(client)} />
            </button>
          </ClientCard>
        ))}

        {!hasSelectedClients && (
          <p className={styles.noClientsSelected}>Nenhum cliente selecionado</p>
        )}
      </section>

      <footer className={styles.footer}>
        <Button variant="secondary" onClick={onClearAllSelectedClients}>
          Limpar clientes selecionados
        </Button>
      </footer>
    </main>
  )
}

export default ClientsSelected
