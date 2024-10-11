import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

import Button from "@/components/Button"
import Input from "@/components/Input"
import { useAuth } from "@/context/auth"

import styles from "./styles.module.css"

const loginSchema = z.object({
  username: z
    .string()
    .min(2, { message: "O usuário precisa ter no mínimo 2 caracteres" })
    .regex(/^([a-z\\-]+)$/i, {
      message: "O usuário só pode conter letras e hífen",
    }),
})

type LoginSchema = z.infer<typeof loginSchema>

const Home = () => {
  const { onSaveUsername } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const navigate = useNavigate()

  const handlePressEnter = ({ username }: LoginSchema) => {
    onSaveUsername(username)
    navigate("/clients")
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, seja bem-vindo!</h1>
        <form onSubmit={handleSubmit(handlePressEnter)}>
          <Input
            placeholder="Digite o seu nome:"
            {...register("username")}
            error={errors.username?.message}
          />
          <Button disabled={isSubmitting} type="submit">
            Entrar
          </Button>
        </form>
      </div>
    </main>
  )
}

export default Home
