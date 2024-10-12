export const formatCurrency = (value: number | string) => {
  const numericValue = String(value).replace(/\D/g, "")
  if (numericValue === "") return ""
  const floatValue = (parseInt(numericValue) / 100).toFixed(2)
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(parseFloat(floatValue))
}

export const formatValueToLocaleString = (value: number) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

export const currencyToNumber = (value: string) => {
  return parseFloat(value.replace(/[R$,.]/g, ""))
}
