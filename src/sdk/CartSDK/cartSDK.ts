import { BehaviorSubject } from "rxjs";

import { Store as store } from "store-microapp";
import { Reducer } from "./store/cart.reducer";
import * as CartActions from "./store/cart.action";

export class CartSDK {
  static initializeSDK(): void {
    if (!window.cartSDK) {
      // Initial State fetched Via API call
      const CART_STATE = {
        cart: []
      };
      /* TODO: CHECK what get added in Lazy REDUCER, (STATE OR CARTSTATE) */
      store.addReducers({
        cart: Reducer(CART_STATE)
      });
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

  public addToCart(id: string) {
    store.dispatch(CartActions.AddItem$(id));
    // const cart = this.$cart.value;
    // if (!cart.includes(id)) {
    //   this.$cart.next([...cart, id]);
    // }
  }

  public removeFromCart(id: string) {
    store.dispatch(CartActions.RemoveItem$(id));
    // const cart = this.$cart.value;
    // const updatedCart = cart.filter((itemId: string) => itemId !== id);
    // this.$cart.next(updatedCart);
  }
}

declare global {
  interface Window {
    cartSDK: CartSDK;
  }
}
