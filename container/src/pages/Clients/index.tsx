import { useQuery } from "@tanstack/react-query"
import Button from "components/Button"
import Pagination from "components/Pagination"
import SelectPerPage from "components/SelectPerPage"
import { useRef, useState } from "react"

import { Client } from "@/@types/client"
import { useApi } from "@/context/api"
import { userApi } from "@/services/client"

import ClientModal, { ClientModalRef } from "./components/ClientModal"
import ClientsCards from "./components/ClientsCards"
import styles from "./styles.module.css"

const Clients = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [clientsPerPage, setClientsPerPage] = useState<number>(10)

  const { api } = useApi()

  const { isPending, error, data } = useQuery({
    queryKey: ["clients", currentPage, clientsPerPage],
    queryFn: () =>
      userApi.getClients(api, {
        page: currentPage,
        limit: clientsPerPage,
      }),
  })

  const clientModalRef = useRef<ClientModalRef>(null)

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const handleClientsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setClientsPerPage(Number(e.target.value))
  }

  const handleClickAddClient = () => {
    clientModalRef.current?.open()
  }

  const handleClickEditClient = (client: Client) => {
    clientModalRef.current?.open(client)
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
          <SelectPerPage
            clientsPerPage={clientsPerPage}
            handleClientsPerPageChange={handleClientsPerPageChange}
          />
        </div>
      </div>
      <section className={styles.section}>
        {isPending ? (
          <div className={styles.loadingContainer}>
            <p>Carregando...</p>
          </div>
        ) : (
          <ClientsCards
            data={data?.clients}
            onEditClient={handleClickEditClient}
          />
        )}
      </section>

      <footer className={styles.footer}>
        <Button variant="secondary" onClick={handleClickAddClient}>
          Criar cliente
        </Button>
        <Pagination
          totalPages={data?.totalPages ?? 1}
          currentPage={data?.currentPage || 1}
          onPageChange={handlePageChange}
        />
      </footer>

      <ClientModal ref={clientModalRef} />
    </main>
  )
}

export default Clients
