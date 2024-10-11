import { forwardRef } from "react"

import styles from "./styles.module.css"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} ref={ref} type="text" {...props} />
      {props.error && <p className={styles.error}>{props.error}</p>}
    </div>
  )
})

export default Input
