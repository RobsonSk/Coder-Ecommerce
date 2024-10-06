'use client'
import EmptyCart from "@/components/checkout/cart/EmptyCart"
import ItemCart from "@/components/checkout/cart/ItemCart"
import TotalCart from "@/components/checkout/cart/TotalCart"
import CheckoutHeader from "@/components/checkout/CheckoutHeader"
import useCart from "@/data/hooks/useCart"

export default function Page() {
        const { 
            items, 
            qtyItems,
            totalValue,
            addItem,
            removeItem,
            removeProduct,
        } = useCart()

        return (
            <div className="flex flex-col gap-5 container">
                <CheckoutHeader step="cart" />
                <div className="flex flex-col gap-4">
                    {items.length === 0 && <EmptyCart />}
                    {items.map((item: any) => (
                        <ItemCart
                            key={item.product.id}
                            item={item}
                            addItem={() => addItem(item.produto)}
                            removeItem={() => removeItem(item.produto)}
                            removeProduct={() => removeProduct(item.produto)}
                        />
                    ))}
                </div>
                <TotalCart qtyItems={qtyItems} totalValue={totalValue} />
            </div>
        )
}