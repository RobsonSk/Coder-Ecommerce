'use client'
import { IconCreditCard, IconShoppingCart } from '@tabler/icons-react'
import { Currency, IProduct } from '@gstore/core'
import useInstallments from '@/data/hooks/useInstallments'
import { useRouter } from 'next/navigation'
import useCart from '@/data/hooks/useCart'

export interface BannerCompraProps {
    product: IProduct
}

export default function BannerCompra(props: BannerCompraProps) {
    const router = useRouter()
    const { product } = props
    const promoPrice = product.promoPrice ?? 0
    const { addItem } = useCart()
       const installments = useInstallments(promoPrice)

    return (
        <div className="flex">
            <div className="flex flex-col border-r border-zinc-500 pr-5">
                <div className="line-through text-zinc-400">de {Currency.format(product?.basePrice)}</div>
                <div className="text-2xl font-semibold">
                    <span className="text-base text-zinc-300">por</span>{' '}
                    <span className="text-emerald-500">{Currency.format(product?.promoPrice)}</span>{' '}
                    <span className="text-base text-zinc-300">à vista</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
                <span className="text-base text-zinc-300">{installments.installmentsQty}x de</span>
                {Currency.format(installments.installmentValue)}{' '}
            </div>
            <div className="flex gap-2 items-center">
                <button
                    className="flex-1 button bg-pink-600"

                    onClick={() => addItem(product)}
                >
                    <IconShoppingCart size={20} />
                    <span>Add</span>
                </button>
                <button
                    className="flex-1 button bg-violet-700"
                    onClick={() => {
                         addItem(product)
                        router.push('/checkout/payment')
                    }}
                >
                    <IconCreditCard size={20} />
                    <span>Buy</span>
                </button>
            </div>
        </div>
    )
}
