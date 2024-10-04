import { IProduct } from "../product"

export default interface IItemCart {
    product: IProduct
    quantity: number
}