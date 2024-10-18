export function formatCurrency(value: number) {
  return value.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
  });
}

export function toBoolean(value: string) {
  return value.toLowerCase() === "true"; // true or false
}