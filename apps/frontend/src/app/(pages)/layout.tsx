import Page from "@/components/template/Page";
import { ProviderCart } from "@/data/contexts/contextCart";
import { ProviderPayment } from "@/data/contexts/contextPayment";
import { ProviderProducts } from "@/data/contexts/contextProduct";
export default function Layout(props: any) {
    return    (
        <ProviderProducts>
            <ProviderCart>
                <ProviderPayment>
                    <Page>{props.children}</Page>
                </ProviderPayment>
            </ProviderCart>
        </ProviderProducts>
    )
}