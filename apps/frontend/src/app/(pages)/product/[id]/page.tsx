
import Banner from '@/components/product/Banner'
import InfoProduct from '@/components/product/InfoProduct'
import NotFoundProduct from '@/components/product/NotFoundProduct'
import PriceSlider from '@/components/product/PriceSlider'
import TechReview from '@/components/product/TechReview'
import TitleProduct from '@/components/product/TitleProduct'
import UserReview from '@/components/product/UserReview'
import { products } from "@gstore/core"

export default function PageProduct(props: any) {
    const id = +props.params.id
    const product = products.find((product) => product.id === id)

    return product ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <TitleProduct product={product} />
                <InfoProduct product={product} />
                <Banner product={product} />
                <PriceSlider product={product} />
            </div>
            <UserReview product={product} />
            <TechReview product={product} />
        </div>
    ) : (
        <NotFoundProduct />
    )
}

