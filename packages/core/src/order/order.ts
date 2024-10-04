import IOrderItems from "./orderItems";
import { Payment } from "./payments";
import IShipping from "./shipping";
import { Status } from "./status";

export default interface IOrder {
    id: number;
    date: Date;
    items: IOrderItems[];
    totalValue: number;
    status: Status;
    payment: Payment;
    shipping: IShipping;
}