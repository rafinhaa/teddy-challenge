import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Client } from "@/@types/client"
import Button from "@/components/Button"
import Input from "@/components/Input"
import Modal, { ModalRef } from "@/components/Modal"
import { useApi } from "@/context/api"
import { userApi } from "@/services/client"
import { currencyToNumber, formatCurrency } from "@/utils/current"

const createClientSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O usuário precisa ter no mínimo 2 caracteres" })
    .regex(/^[A-Za-zÀ-ÿ\s-]+$/, {
      message: "O usuário não pode conter números",
    }),
  salary: z
    .string({
      required_error: "O valor do salário é obrigatório",
    })
    .refine(
      (value) => {
        const numericValue = parseFloat(value.replace(/[R$,.]/g, "")) / 100
        return numericValue > 0
      },
      {
        message: "O valor do salário deve ser maior que 0",
      },
    ),
  companyValuation: z
    .string({
      required_error: "O valor da empresa é obrigatório",
    })
    .refine(
      (value) => {
        const numericValue = parseFloat(value.replace(/[R$,.]/g, "")) / 100
        return numericValue > 0
      },
      {
        message: "O valor da empresa deve ser maior que 0",
      },
    ),
})

type CreateClientSchema = z.infer<typeof createClientSchema>

export type CreateClientModalProps = object

const CreateClientModal = forwardRef<ModalRef, CreateClientModalProps>(
  (_props, ref) => {
    const { api } = useApi()
    const queryClient = useQueryClient()
    const modalRef = useRef<ModalRef>(null)

    const {
      register,
      handleSubmit,
      setValue,
      watch,
      reset,
      formState: { errors, isSubmitting },
    } = useForm<CreateClientSchema>({
      resolver: zodResolver(createClientSchema),
    })

    const { mutateAsync: createClient } = useMutation({
      mutationKey: ["createClient"],
      mutationFn: (data: Omit<Client, "id">) => userApi.createClient(api, data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["clients"] })
        modalRef.current?.close()
        reset()
      },
    })

    const handlePressCreateClient = async (data: CreateClientSchema) => {
      await createClient({
        name: data.name,
        salary: currencyToNumber(data.salary),
        companyValuation: currencyToNumber(data.companyValuation),
      })
    }

    const salaryValue = watch("salary")
    const companyValuationValue = watch("companyValuation")

    useEffect(() => {
      if (salaryValue) setValue("salary", formatCurrency(salaryValue))
      if (companyValuationValue)
        setValue("companyValuation", formatCurrency(companyValuationValue))
    }, [salaryValue, companyValuationValue, setValue])

    useImperativeHandle(ref, () => ({
      close: () => {
        modalRef.current?.close()
      },
      open: () => {
        modalRef.current?.open()
      },
    }))

    return (
      <Modal ref={modalRef} title="Criar cliente:">
        <form onSubmit={handleSubmit(handlePressCreateClient)}>
          <Input
            placeholder="Digite o nome:"
            error={errors.name?.message}
            disabled={isSubmitting}
            {...register("name")}
          />
          <Input
            placeholder="Digite o salario:"
            error={errors.salary?.message}
            disabled={isSubmitting}
            {...register("salary")}
          />
          <Input
            placeholder="Digite o valor da empresa:"
            error={errors.companyValuation?.message}
            disabled={isSubmitting}
            {...register("companyValuation")}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Criando..." : "Criar"}
          </Button>
        </form>
      </Modal>
    )
  },
)

export default CreateClientModal
