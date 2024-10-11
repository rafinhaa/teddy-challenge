import styles from "./styles.module.css"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ ...rest }: InputProps) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" {...rest} />
    </div>
  )
}

export default Input
