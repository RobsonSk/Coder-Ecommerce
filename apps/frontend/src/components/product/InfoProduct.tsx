'use client'
import { IProduct } from '@gstore/core'
import Image from 'next/image'
import Especification from './Especification'

export interface InfoProductProps {
    product: IProduct
}

export default function InfoProduct(props: InfoProductProps) {
    const { product } = props
    return product ? (
        <div className="flex items-center bg-violet-dark rounded-xl p-5">
            <div className="flex-1 relative flex justify-center h-96">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="100%"
                    className="object-cover p-7"
                />
            </div>
            <Especification product={product!} />
        </div>
    ) : null
}
