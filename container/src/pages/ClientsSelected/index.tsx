import { useRef, useState } from "react"
import { MdRemove } from "react-icons/md"

import { Client } from "@/@types/client"
import Button from "@/components/Button"
import ClientCard from "@/components/ClientCard"
import Modal, { ModalRef } from "@/components/Modal"
import { useSelectedClient } from "@/context/selected-client"

import styles from "./styles.module.css"

const ClientsSelected = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const { selectedClients, onRemoveSelectedClient, onClearAllSelectedClients } =
    useSelectedClient()

  const hasSelectedClients = selectedClients.length > 0

  const removeAllSelectedClientRef = useRef<ModalRef>(null)
  const removeSelectedClientRef = useRef<ModalRef>(null)

  const handleClickRemoveSelectedClient = (client: Client) => {
    setSelectedClient(client)
    removeSelectedClientRef.current?.open()
  }

  const handleRemoveSelectedClient = () => {
    onRemoveSelectedClient(selectedClient!)
    removeSelectedClientRef.current?.close()

    setSelectedClient(null)
  }

  const handleClickClearAllSelectedClients = () => {
    removeAllSelectedClientRef.current?.open()
  }

  const handleRemoveAllSelectedClients = () => {
    onClearAllSelectedClients()

    removeAllSelectedClientRef.current?.close()
  }

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
              <MdRemove
                onClick={() => handleClickRemoveSelectedClient(client)}
              />
            </button>
          </ClientCard>
        ))}

        {!hasSelectedClients && (
          <p className={styles.noClientsSelected}>Nenhum cliente selecionado</p>
        )}
      </section>

      <footer className={styles.footer}>
        <Button
          variant="secondary"
          onClick={handleClickClearAllSelectedClients}
        >
          Limpar clientes selecionados
        </Button>
      </footer>

      <Modal
        ref={removeAllSelectedClientRef}
        title="Deseja excluir todos os clientes selecionados?"
      >
        <Button variant="secondary" onClick={handleRemoveAllSelectedClients}>
          Sim
        </Button>
      </Modal>

      <Modal ref={removeSelectedClientRef} title="Atenção!">
        <p>
          Deseja excluir o cliente <strong>{selectedClient?.name}</strong>?
        </p>
        <Button variant="secondary" onClick={handleRemoveSelectedClient}>
          Sim
        </Button>
      </Modal>
    </main>
  )
}

export default ClientsSelected
