import { useQuery } from "@tanstack/react-query"
import { useRef, useState } from "react"
import { HiTrash } from "react-icons/hi"
import { MdAdd, MdCreate } from "react-icons/md"

import { Client } from "@/@types/client"
import Button from "@/components/Button"
import ClientCard from "@/components/ClientCard"
import Input from "@/components/Input"
import Modal, { ModalRef } from "@/components/Modal"
import Pagination from "@/components/Pagination"
import { useApi } from "@/context/api"
import { useSelectedClient } from "@/context/selected-client"
import { userApi } from "@/services/client"

import styles from "./styles.module.css"

const Clients = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [clientsPerPage, setClientsPerPage] = useState<number>(10)

  const { onSelectClient } = useSelectedClient()
  const { api } = useApi()

  const { isPending, error, data } = useQuery({
    queryKey: ["clients", currentPage, clientsPerPage],
    queryFn: () =>
      userApi.getClients(api, {
        page: currentPage,
        limit: clientsPerPage,
      }),
  })

  const addClientRef = useRef<ModalRef>(null)
  const alreadySelectedClientModalRef = useRef<ModalRef>(null)

  const handleClickSelectClient = (client: Client) => {
    try {
      onSelectClient(client)
    } catch {
      alreadySelectedClientModalRef.current?.open()
    }
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const handleClientsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setClientsPerPage(Number(e.target.value))
  }

  if (error) return <div className={styles.errorContainer}>{error.message}</div>

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p>
          <strong>{data?.clients.length}</strong> clientes encontrados:
        </p>
        <div className={styles.selectContainer}>
          Clientes por página:
          <select
            onChange={handleClientsPerPageChange}
            className={styles.select}
          >
            {[5, 10, 15].map((item) => (
              <option
                key={item}
                value={item}
                selected={item === clientsPerPage}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <section className={styles.section}>
        {isPending ? (
          <div className={styles.loadingContainer}>
            <p>Carregando...</p>
          </div>
        ) : (
          data?.clients.map((client) => (
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
                <MdAdd onClick={() => handleClickSelectClient(client)} />
              </button>
            </ClientCard>
          ))
        )}
      </section>

      <footer className={styles.footer}>
        <Button variant="secondary">Criar cliente</Button>
        <Pagination
          totalPages={data?.totalPages ?? 1}
          currentPage={data?.currentPage || 1}
          onPageChange={handlePageChange}
        />
      </footer>

      <Modal ref={addClientRef} title="Criar cliente:">
        <Input placeholder="Digite o nome" />
        <Input placeholder="Digite o salário" />
        <Input placeholder="Digite o valor da empresa" />
        <Button onClick={() => {}}>Criar cliente</Button>{" "}
      </Modal>
      <Modal title="Excluir cliente:">
        <p>
          Você está prestes a excluir o cliente: <strong>Eduardo</strong>
        </p>
      </Modal>

      <Modal ref={alreadySelectedClientModalRef} title="Atenção!">
        <p>Você já selecionou este cliente. Por favor, selecione outro.</p>
      </Modal>
    </main>
  )
}

export default Clients
