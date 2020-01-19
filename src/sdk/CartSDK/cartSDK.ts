import { Store as store } from "store-microapp";
import { Reducer } from "./store/cart.reducer";
import * as asCartEffects from "./store/cart.effects";

declare global {
  interface Window {
    cartSDK: CartSDK;
  }
}

class CartSDK {
  static initializeSDK(): void {
    if (!window.cartSDK) {
      // Initial State fetched Via API call
      const CART_STATE: Array<string> = [];
      /* NOT GLOBAL STATE ONLY STATE PASSED TO REDUCER */
      /* SDK State will be available outside application by cart key */
      store.addReducers({ cart: Reducer(CART_STATE) });
      window.cartSDK = new CartSDK();
    }
  }

  static getInstance(): CartSDK {
    return window.cartSDK;
  }

  public addToCart(id: string) {
    store.dispatch(asCartEffects.AddItem$(id));
  }

  public removeFromCart(id: string) {
    store.dispatch(asCartEffects.RemoveItem$(id));
  }
}

CartSDK.initializeSDK();

export const cartSDK = CartSDK.getInstance();
