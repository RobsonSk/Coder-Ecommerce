'use client'
import {
    IOrderItems,
    Order,
    IShipping,
    Status,
    Payment,
    IItemCart,
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useLocalStorage from '../hooks/useLocalStorage'
import useCart from '../hooks/useCart'
import useAPI from '../hooks/useAPI'

export interface ContextPaymentProps {
    payment: Payment
    shipping: Partial<IShipping>
    changePayment: (payment: Payment) => void
    changeShipping: (shipping: Partial<IShipping>) => void
    checkout: () => void
}

const ContextPayment = createContext<ContextPaymentProps>({} as any)

export function ProviderPayment(props: any) {
    const { httpPost } = useAPI()
    const { items, totalValue, clearCart } = useCart()
    const { saveItem, getItem } = useLocalStorage()
    const router = useRouter()

    const [payment, setPayment] = useState<Payment>(
        Payment.PIX,
    )
    const [shipping, setShipping] = useState<Partial<IShipping>>({})

    function changePayment(payment: Payment) {
        saveItem('payment', payment)
        setPayment(payment)
    }

    function changeShipping(shipping: Partial<IShipping>) {
        saveItem('shipping', shipping)
        setShipping(shipping)
    }

    async function checkout() {
        const order: Partial<Order> = {
            date: new Date(),
            payment,
            totalValue,
            shipping: shipping as IShipping,
            status: Status.RECEIVED,
            items: items.map(
                (item: IItemCart) =>
                    ({
                        product: item.product,
                        quantity: item.quantity,
                        price: item.product.promoPrice || item.product.basePrice,
                    }) as IOrderItems,
            ),
        }

        await httpPost('/order', order)
        clearCart()
        router.push('/checkout/sucess')
    }

    useEffect(() => {
        const shipping = getItem('shipping')
        const payment = getItem('payment')
        if (shipping) setShipping(shipping)
        if (payment) setPayment(payment)
    }, [getItem])

    return (
        <ContextPayment.Provider
            value={{
                shipping,
                payment,
                changeShipping,
                changePayment,
                checkout,
            }}
        >
            {props.children}
        </ContextPayment.Provider>
    )
}

export default ContextPayment
