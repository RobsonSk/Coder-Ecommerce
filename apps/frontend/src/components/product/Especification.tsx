import { IconTag } from '@tabler/icons-react'
import { IProduct } from '@gstore/core'
import Tag from '../shared/Tag'

export interface EspecificationProps {
    product: IProduct
}

export default function Especificacoes(props: EspecificationProps) {
    const { product } = props
    return product ? (
        <div className="flex-1 flex flex-col gap-1">
            <div className="flex mb-3">
                <Tag label={product.especifications.highlight!} icon={IconTag} outlined />
            </div>
            {product?.especifications &&
                Object.keys(product.especifications)
                    .filter((k) => k !== 'highlight')
                    .map((key) => (
                        <div key={key} className="flex gap-1">
                            <span className="p-2 w-1/3 bg-white/5 rounded">{key}</span>
                            <span className="p-2 w-2/3 bg-white/5 rounded">
                                {product.especifications[key]}
                            </span>
                        </div>
                    ))}
        </div>
    ) : null
}
