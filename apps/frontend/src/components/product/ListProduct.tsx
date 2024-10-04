'use client'

import ItemProduct from './ItemProduct'
import NotFoundProduct from './NotFoundProduct'
import useProduct from '@/data/hooks/useProduct'

export default function ListProduct() {
    const { products } = useProduct()
    return products.length ? (
        <div
            className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
            "
        >
            {products.map((product) => (
                <ItemProduct products={product} key={product.id} />
            ))}
        </div>
    ) : (
        <NotFoundProduct noBackButton />
    )
}
