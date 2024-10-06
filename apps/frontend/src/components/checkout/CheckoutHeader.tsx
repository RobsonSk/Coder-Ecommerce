import Link from 'next/link'

interface CheckoutHeaderProps {
    step: 'cart' | 'payment'
}

export default function CheckoutHeader(props: CheckoutHeaderProps) {
    function selectColor(step: string) {
        return props.step === step ? 'text-pink-500' : 'text-zinc-400'
    }

    function selectBg(step: string) {
        return props.step === step
            ? 'bg-pink-500 text-white'
            : 'bg-zinc-400 text-black'
    }

    function itemRender(
        step: 'cart' | 'payment',
        index: number,
        title: string,
        path: string,
    ) {
        return (
            <Link
                href={path}
                className={`
                    flex items-center gap-2 cursor-pointer
                    ${selectColor(step)}
                `}
            >
                <span
                    className={`
                        flex justify-center items-center 
                        text-xs font-bold w-5 h-5 rounded-full 
                        ${selectBg(step)}
                    `}
                >
                    {index}
                </span>
                <span>{title}</span>
            </Link>
        )
    }

    return (
        <div className="flex justify-center items-center gap-6 h-20 select-none">
            {itemRender('cart', 1, 'Cart', '/checkout/cart')}
            <div className="bg-zinc-300 h-px w-12"></div>
            {itemRender('payment', 2, 'Payment', '/checkout/payment')}
        </div>
    )
}
