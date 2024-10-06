import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react'
import { Currency, IItemCart as ItemCartModel } from '@gstore/core'
import Image from 'next/image'
import useInstallments from '@/data/hooks/useInstallments'

export interface ItemCartProps {
    item: ItemCartModel
    addItem: () => void
    removeItem: () => void
    removeProduct: () => void
}

export default function ItemCart(props: ItemCartProps) {
    const { item } = props
    const { product, quantity } = item
    const installment   = useInstallments(product.promoPrice)

    return (
        <div className="flex items-center bg-violet-dark px-8 py-0 rounded-xl gap-16">
            <Image
                src={product.image}
                width={200}
                height={0}
                alt="Imagem Produto"
            />
            <div className="flex flex-col h-28 flex-1">
                <span className="text-xl">{product.name}</span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <span className="text-sm text-zinc-400">Quantidade</span>
                <div className="flex items-center border border-zinc-300 rounded-lg">
                    <button
                        disabled={quantity === 1}
                        className={`${quantity === 1 && 'text-zinc-500 cursor-not-allowed'} px-2 py-0.5`}
                        onClick={props.removeItem}
                    >
                        <IconMinus size={15} />
                    </button>
                    <span className="border-x border-zinc-300 text-lg px-4 py-0.5">
                        {quantity}
                    </span>
                    <button
                        className="px-2 py-0.5 text-emerald-500"
                        onClick={props.addItem}
                    >
                        <IconPlus size={15} />
                    </button>
                </div>
                <button
                    className="flex items-center gap-1 text-pink-600 select-none"
                    onClick={props.removeProduct}
                >
                    <IconTrash size={20} />
                    <span className="text-sm">Remover</span>
                </button>
            </div>
            <div className="flex flex-col items-end">
                <span className="line-through text-zinc-400 text-sm">
                    de {Currency.format(product.basePrice)}
                </span>
                <div className="flex gap-1.5 items-baseline">
                    <span className="text-sm">por</span>
                    <span className="text-emerald-500 text-xl font-semibold">
                        {Currency.format(product.promoPrice)}
                    </span>
                </div>
                <span className="text-xs text-zinc-300">
                    Preço à vista no PIX/Boleto
                </span>
                <span className="text-sm text-zinc-300 mt-4">
                    Parcelamento no Cartão
                </span>
                <div className="text-sm text-zinc-300">
                    em até{' '}
                    <span className="text-white font-semibold">
                        {installment.installmentsQty}x
                    </span>{' '}
                    de{' '}
                    <span className="text-white font-semibold">
                        {Currency.format(installment.installmentValue)}
                    </span>
                </div>
            </div>
        </div>
    )
}
