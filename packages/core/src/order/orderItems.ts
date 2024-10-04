import { IProduct } from "../product";


export default interface IOrderItems {
    id: number;
    product: IProduct;
    quantity: number;
    price: number;
}