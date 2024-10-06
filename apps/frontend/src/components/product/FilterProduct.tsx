'use client'
import useProduct from '@/data/hooks/useProduct'
import { IconSearch } from '@tabler/icons-react'

export interface FilterProductProps {
    className?: string
}

export default function FilterProduct(props: FilterProductProps) {
    const { search, setSearch } = useProduct()
    return (
        <div>
            <div
                className={`
                    flex gap-2 bg-violet-dark border border-white/20 
                    rounded-full overflow-hidden ${props.className ?? ''}
                `}
            >
                <input
                    value={search ?? ''}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="O que você procura?"
                    className="flex-1 bg-transparent outline-none px-6 py-3"
                />
                <div className="flex justify-center items-center bg-emerald-500 px-4">
                    <IconSearch size={24} className="text-white" />
                </div>
            </div>
        </div>
    )
}
