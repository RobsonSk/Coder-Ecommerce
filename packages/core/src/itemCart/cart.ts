import { IProduct } from "../product";
import ICartItems  from "./itemCart";
export default class Cart {
    constructor(public items: ICartItems[] = []) {}

    addItem(product: IProduct): Cart {
        const item = this.itemQtyProduct(product);
        if (item) {
            return new Cart(this.changeQtyItem(this.items, product, 1));
        } else {
            return new Cart([...this.items, { product, quantity: 1 }]);
        }
    }

    removeItem(product: IProduct) {
        const item = this.itemQtyProduct(product);
        if (!item) return this

        return new Cart(this.changeQtyItem(this.items, product, -1));
    }

    removeProduct(product: IProduct) {
        const item = this.itemQtyProduct(product);
        if (!item) return this
        return new Cart(this.items.filter((item) => item.product.id !== product.id));
    }

    clearCart() {
        return new Cart([]);
    }
    
    get qtyItems() {
        return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0);
    }

    get totalValueWithDiscount() {
        return this.items
            .map((item) => item.product.promoPrice * item.quantity)
            .reduce((a, b) => a + b, 0);
    }

    get totalValue() {
        return this.items
            .map((item) => item.product.basePrice * item.quantity)
            .reduce((a, b) => a + b, 0);
    }

    private itemQtyProduct(product: IProduct) {
        return this.items.find((item) => item.product.id === product.id);
    }

    private changeQtyItem(items: ICartItems[], product: IProduct, qty: number): ICartItems[] {
        return items.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + qty } : item)
        .filter((item) => item.quantity > 0);
    }
};