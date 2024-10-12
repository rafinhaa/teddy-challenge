import { useMutation, useQueryClient } from "@tanstack/react-query"
import { forwardRef, useImperativeHandle, useRef, useState } from "react"

import { Client } from "@/@types/client"
import Button from "@/components/Button"
import Modal, { ModalRef } from "@/components/Modal"
import { useApi } from "@/context/api"
import { useSelectedClient } from "@/context/selected-client"
import { userApi } from "@/services/client"

export type DeleteClientModalProps = object

export type DeleteClientModalRef = {
  open: (client: Client) => void
  close: () => void
}

const DeleteClientModal = forwardRef<
  DeleteClientModalRef,
  DeleteClientModalProps
>((_props, ref) => {
  const [selectedClient, setSelectedClient] = useState<Client | null>()

  const { api } = useApi()
  const { onRemoveSelectedClient } = useSelectedClient()

  const queryClient = useQueryClient()
  const modalRef = useRef<ModalRef>(null)

  const { mutateAsync: deleteClient, isPending } = useMutation({
    mutationKey: ["createClient"],
    mutationFn: (data: Pick<Client, "id">) =>
      userApi.deleteClient(api, data.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] })
      onRemoveSelectedClient(selectedClient as Client)
      modalRef.current?.close()
    },
  })

  const handlePressDeleteClient = async () => {
    await deleteClient({
      id: selectedClient?.id as number,
    })
  }

  useImperativeHandle(ref, () => ({
    close: () => {
      modalRef.current?.close()
    },
    open: (client: Client) => {
      setSelectedClient(client)
      modalRef.current?.open()
    },
  }))

  return (
    <Modal ref={modalRef} title="Excluir cliente:">
      <p>
        Você está prestes a excluir o cliente:
        <strong> {selectedClient?.name}</strong>
      </p>

      <Button onClick={handlePressDeleteClient}>
        {isPending ? "Excluindo..." : "Excluir"}
      </Button>
    </Modal>
  )
})

export default DeleteClientModal
