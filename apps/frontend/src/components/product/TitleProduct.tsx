import { IProduct } from '@gstore/core'

export interface TitleProductProps {
    product: IProduct
}

export default function TituloProduto(props: TitleProductProps) {
    const { product } = props
    return (
        <div className="flex flex-col">
            <div className="text-2xl">{product?.name}</div>
        <div className="font-light text-zinc-400">{product?.description}</div>
        </div>
    )
}
