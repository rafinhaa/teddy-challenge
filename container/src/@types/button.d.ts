declare module "buttons/Button" {
  const Button: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
      variant?: "primary" | "secondary"
    }
  >
  export default Button
}
