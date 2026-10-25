import type { TFunction } from "i18next"

// Lê um array das traduções. Antes do JSON carregar, o i18next devolve a própria chave (string)
export function translateList<T>(t: TFunction, key: string): T[] {
  const value = t(key, { returnObjects: true }) as unknown
  return Array.isArray(value) ? (value as T[]) : []
}
