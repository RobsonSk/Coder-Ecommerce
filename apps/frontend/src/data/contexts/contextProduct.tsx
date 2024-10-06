'use client'
import { createContext, useCallback, useEffect, useState } from 'react'
import { IProduct, Filter } from '@gstore/core'
import useAPI from '../hooks/useAPI'

export interface ContextProductsProps {
    products: IProduct[]
    search: string
    setSearch: (search: string) => void
    productById: (id: number) => IProduct | null
}

const ContextProducts = createContext<ContextProductsProps>({} as any)

export function ProviderProducts(props: any) {
    const { httpGet } = useAPI()
    const [search, setSearch] = useState<string>('')
    const [products, setProducts] = useState<IProduct[]>([])

    const loadProducts = useCallback(async () => {
        const products = await httpGet('/product')
        setProducts(products ?? [])
    }, [httpGet])

    useEffect(() => {
        loadProducts()
    }, [loadProducts])

    return (
        <ContextProducts.Provider
            value={{
                search,
                get products() {
                    if (!search) return products
                    return new Filter().execute(search, products)
                },
                setSearch,
                productById: (id: number) =>
                    products.find((product) => product.id === id) ?? null,
            }}
        >
            {props.children}
        </ContextProducts.Provider>
    )
}

export default ContextProducts
