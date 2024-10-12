import { useRef } from "react"
import { HiTrash } from "react-icons/hi"
import { MdAdd, MdCreate } from "react-icons/md"

import { Client } from "@/@types/client"
import ClientCard from "@/components/ClientCard"
import Modal, { ModalRef } from "@/components/Modal"
import { useSelectedClient } from "@/context/selected-client"

import DeleteClientModal, { DeleteClientModalRef } from "../DeleteClientModal"
import styles from "./styles.module.css"

export type ClientCardsProps = {
  data: Client[]
  onEditClient: (client: Client) => void
}

const ClientsCards = ({ data, onEditClient }: ClientCardsProps) => {
  const { onSelectClient } = useSelectedClient()

  const alreadySelectedClientModalRef = useRef<ModalRef>(null)
  const deleteClientRef = useRef<DeleteClientModalRef>(null)

  const handleClickSelectClient = (client: Client) => () => {
    try {
      onSelectClient(client)
    } catch {
      alreadySelectedClientModalRef.current?.open()
    }
  }

  const handleClickDeleteClient = (client: Client) => () => {
    deleteClientRef.current?.open(client)
  }

  const handleClickEditClient = (client: Client) => () => {
    onEditClient(client)
  }

  return (
    <div className={styles.cards}>
      {data.map((client) => (
        <ClientCard
          key={client.id}
          name={client.name}
          salary={client.salary}
          companyValuation={client.companyValuation}
        >
          <button>
            <HiTrash onClick={handleClickDeleteClient(client)} />
          </button>

          <button>
            <MdCreate onClick={handleClickEditClient(client)} />
          </button>

          <button>
            <MdAdd onClick={handleClickSelectClient(client)} />
          </button>
        </ClientCard>
      ))}

      <Modal ref={alreadySelectedClientModalRef} title="Atenção!">
        <p>Você já selecionou este cliente. Por favor, selecione outro.</p>
      </Modal>

      <DeleteClientModal ref={deleteClientRef} />
    </div>
  )
}

export default ClientsCards
