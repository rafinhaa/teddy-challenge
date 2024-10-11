import Button from "@/components/Button"
import Input from "@/components/Input"

import styles from "./styles.module.css"

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, seja bem-vindo!</h1>
        <Input />
        <Button>Entrar</Button>
      </div>
    </main>
  )
}

export default Home
