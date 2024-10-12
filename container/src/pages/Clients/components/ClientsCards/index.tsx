import { useRef } from "react"
import { HiTrash } from "react-icons/hi"
import { MdAdd, MdCreate } from "react-icons/md"

import { Client } from "@/@types/client"
import ClientCard from "@/components/ClientCard"
import Modal, { ModalRef } from "@/components/Modal"
import { useSelectedClient } from "@/context/selected-client"

import styles from "./styles.module.css"

export type ClientCardsProps = {
  data: Client[]
}

const ClientsCards = ({ data }: ClientCardsProps) => {
  const { onSelectClient } = useSelectedClient()

  const alreadySelectedClientModalRef = useRef<ModalRef>(null)

  const handleClickSelectClient = (client: Client) => () => {
    try {
      onSelectClient(client)
    } catch {
      alreadySelectedClientModalRef.current?.open()
    }
  }
  return (
    <div className={styles.cards}>
      {data.map((client) => (
        <ClientCard
          key={client.name}
          name={client.name}
          salary={client.salary}
          companyValuation={client.companyValuation}
        >
          <button>
            <HiTrash />
          </button>

          <button>
            <MdCreate />
          </button>

          <button>
            <MdAdd onClick={handleClickSelectClient(client)} />
          </button>
        </ClientCard>
      ))}

      <Modal ref={alreadySelectedClientModalRef} title="Atenção!">
        <p>Você já selecionou este cliente. Por favor, selecione outro.</p>
      </Modal>
    </div>
  )
}

export default ClientsCards
