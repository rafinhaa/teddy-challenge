import { useNavigate } from "react-router-dom"

import Button from "@/components/Button"
import Input from "@/components/Input"
import { useAuth } from "@/context/auth"

import styles from "./styles.module.css"

const Home = () => {
  const { onSaveUsername } = useAuth()

  const navigate = useNavigate()

  const handlePressEnter = () => {
    onSaveUsername("João")
    navigate("/clients")
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, seja bem-vindo!</h1>
        <Input />
        <Button onClick={() => handlePressEnter()}>Entrar</Button>
      </div>
    </main>
  )
}

export default Home
