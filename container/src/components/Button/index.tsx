import styles from "./styles.module.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button = ({ variant = "primary", ...rest }: ButtonProps) => {
  const stylesMap = {
    primary: styles.primary,
    secondary: styles.secondary,
  }[variant];

  return <button className={`${styles.button} ${stylesMap}`} {...rest} />;
};

export default Button;
