import { BehaviorSubject } from "rxjs";

import { Store } from "store-microapp";

declare global {
  interface Window {
    cartSDK: CartSDK;
  }
}

export class CartSDK {
  static initializeSDK(): void {
    if (!window.cartSDK) {
      window.cartSDK = new CartSDK();
    }
  }

  static getInstance(): CartSDK {
    return window.cartSDK;
  }

  private $cart: BehaviorSubject<any> = new BehaviorSubject([]);

  public getCart() {
    return this.$cart;
  }

  addToCart(id: string) {
    const cart = this.$cart.value;
    if (!cart.includes(id)) {
      this.$cart.next([...cart, id]);
    }
  }

  removeFromCart(id: string) {
    const cart = this.$cart.value;
    const updatedCart = cart.filter((itemId: string) => itemId !== id);
    this.$cart.next(updatedCart);
  }
}
