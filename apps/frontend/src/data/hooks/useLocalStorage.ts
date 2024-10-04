import { useCallback } from 'react'

export default function useLocalStorage() {
    const saveItem = useCallback((chave: string, valor: any) => {
        localStorage.setItem(chave, JSON.stringify(valor))
    }, [])

    const getItem = useCallback((chave: string) => {
        const valor = localStorage.getItem(chave)
        return valor ? JSON.parse(valor) : null
    }, [])

    const removeItem = useCallback((chave: string) => {
        localStorage.removeItem(chave)
    }, [])

    return { saveItem, getItem, removeItem }
}
