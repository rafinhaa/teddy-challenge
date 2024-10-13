import { useRef } from "react"
import { HiTrash } from "react-icons/hi"
import { MdAdd, MdCheck, MdCreate } from "react-icons/md"

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
  const { onSelectClient, selectedClients } = useSelectedClient()

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

  const clientAlreadySelected = (client: Client) => {
    return selectedClients.find(
      (selectedClient) => selectedClient.id === client.id,
    )
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
            <HiTrash size={15} onClick={handleClickDeleteClient(client)} />
          </button>

          <button>
            <MdCreate size={15} onClick={handleClickEditClient(client)} />
          </button>

          {clientAlreadySelected(client) ? (
            <MdCheck size={15} />
          ) : (
            <button>
              <MdAdd size={15} onClick={handleClickSelectClient(client)} />
            </button>
          )}
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
