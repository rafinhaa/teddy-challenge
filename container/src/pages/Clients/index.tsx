import { HiTrash } from "react-icons/hi"
import { MdAdd, MdCreate } from "react-icons/md"

import { Client } from "@/@types/client"
import Button from "@/components/Button"
import ClientCard from "@/components/ClientCard"
import Input from "@/components/Input"
import Modal from "@/components/Modal"
import Pagination from "@/components/Pagination"
import { useSelectedClient } from "@/context/selected-client"

import styles from "./styles.module.css"

const fakeClients: Client[] = [
  { id: "1", name: "João", salary: 2000, companyValuation: 1000 },
  { id: "2", name: "Maria", salary: 3000, companyValuation: 2000 },
  { id: "3", name: "Pedro", salary: 4000, companyValuation: 1500 },
  { id: "4", name: "Ana", salary: 5000, companyValuation: 2500 },
  { id: "5", name: "Carlos", salary: 6000, companyValuation: 3000 },
  { id: "6", name: "Joaquim", salary: 7000, companyValuation: 4000 },
  { id: "7", name: "Lucas", salary: 8000, companyValuation: 5000 },
  { id: "8", name: "Marcelo", salary: 9000, companyValuation: 6000 },
  { id: "9", name: "Rafael", salary: 10000, companyValuation: 7000 },
]

const Clients = () => {
  const { onSelectClient } = useSelectedClient()

  const handleClickSelectClient = (client: Client) => {
    onSelectClient(client)
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p>
          <strong>16</strong> clientes encontrados:
        </p>
        <div className={styles.selectContainer}>
          Clientes por página:
          <select className={styles.select}>
            <option value="10">10</option>
            <option selected value="20">
              20
            </option>
            <option value="30">30</option>
          </select>
        </div>
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
              <HiTrash />
            </button>

            <button>
              <MdCreate />
            </button>

            <button>
              <MdAdd onClick={() => handleClickSelectClient(client)} />
            </button>
          </ClientCard>
        ))}
      </section>

      <footer className={styles.footer}>
        <Button variant="secondary">Criar cliente</Button>
        <Pagination totalPages={10} currentPage={4} onPageChange={() => {}} />
      </footer>

      <Modal title="Criar cliente:" isOpen={false} onClose={() => {}}>
        <Input placeholder="Digite o nome" />
        <Input placeholder="Digite o salário" />
        <Input placeholder="Digite o valor da empresa" />
        <Button onClick={() => {}}>Criar cliente</Button>{" "}
      </Modal>
      <Modal title="Excluir cliente:" isOpen={false} onClose={() => {}}>
        <p>
          Você está prestes a excluir o cliente: <strong>Eduardo</strong>
        </p>
      </Modal>
    </main>
  )
}

export default Clients
