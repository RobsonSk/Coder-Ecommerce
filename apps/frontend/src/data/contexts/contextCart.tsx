'use client'
import {
    InstallmentCalc,
    Cart,
    IItemCart,
    IInstallments,
    IProduct,
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export interface ContextCartProps {
    items: IItemCart[]
    qtyItems: number
    totalValue: number
    totalValueWithDiscount: number
    installment: IInstallments
    addItem: (product: IProduct) => void
    removeItem: (product: IProduct) => void
    removeProduct: (product: IProduct) => void
    clearCart: () => void
}

const ContextCart = createContext<ContextCartProps>({} as any)

export function ProviderCart(props: any) {
    const { saveItem, getItem } = useLocalStorage()
    const [ cart, setCart] = useState<Cart>(new Cart())

    function addItem(product: IProduct) {
        changeCart(cart.addItem(product))
    }

    function removeItem(product: IProduct) {
        changeCart(cart.removeItem(product))
    }

    function removeProduct(product: IProduct) {
        changeCart(cart.removeProduct(product))
    }

    function clearCart() {
        changeCart(cart.clearCart())
    }

    function changeCart(cart: Cart) {
        saveItem('cart', cart.items)
        setCart(cart)
    }

    useEffect(() => {
        const savedItems: IItemCart[] = getItem('cart')
        if (savedItems) setCart(new Cart(savedItems))
    }, [getItem])

    return (
        <ContextCart.Provider
            value={{
                items: cart.items,
                qtyItems: cart.qtyItems,
                totalValueWithDiscount: cart.totalValueWithDiscount,
                totalValue: cart.totalValue,
                installment: new InstallmentCalc().execute(
                    cart.totalValue,
                ),
                addItem,
                removeItem,
                removeProduct,
                clearCart,
            }}
        >
            {props.children}
        </ContextCart.Provider>
    )
}

export default ContextCart
