'use client'
import { Currency,  IProduct } from "@gstore/core"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import StarReview from "../shared/StarReview"
import Image from "next/image"
import Link from "next/link"
import useInstallments from "@/data/hooks/useInstallments"
import useCart from "@/data/hooks/useCart"



export interface IItemProductProps {
    product: IProduct
}


export default function ItemProduct(props: IItemProductProps) {
    const { product } = props
    const { addItem } = useCart()
    const installment = useInstallments(product.promoPrice)
    return (
        <Link href={`/product/${product.id}`}
            className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]">
            <div className="absolute flex justify-end top-2.5 right-2.5">
            <StarReview evaluation={props.product.evaluation} />
            </div>
            <div className="w-full h-48 relative">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="100%"
                    className="object-contain"
                />
            </div>
            <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
                <span className="text-lg font-semibold">{product.name}</span>
                <div className="self-start text-sm border-b border-dashed">
                    {product.especifications.highlight}
                </div>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through">
                        de {Currency.format(product.basePrice)}
                    </span>
                    <span className="text-xl font-semibold text-emerald-400">
                        por {Currency.format(product.promoPrice)}
                    </span>
                    <span className="text-zinc-400 text-xs">
                        até {installment.installmentsQty}x de{' '}
                        {Currency.format(installment.totalValue)}
                    </span>
                </div>
                <button
                    className="
                      flex justify-center items-center gap-2 h-8
                      bg-violet-700 hover:border-2 border-emerald-500 rounded-full
                    "
                    onClick={(e) => {
                        e.preventDefault()
                        console.log('Adicionar ao carrinho')
                        addItem(props.product)
                    }}
                >
                    <IconShoppingCartPlus size={20} />
                    <span>Add</span>
                </button>
            </div>
        </Link>
    )
}