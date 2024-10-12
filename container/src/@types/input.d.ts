declare module "buttons/Input" {
  const Input: React.FC<
    React.InputHTMLAttributes<HTMLInputElement> & {
      error?: string
    }
  >
  export default Input
}
