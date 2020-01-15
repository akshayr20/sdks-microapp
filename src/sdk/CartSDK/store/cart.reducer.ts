import * as CartActions from "./cart.action";

interface CART_STATE {
  cart: Array<string>;
}

const InitialState: CART_STATE = {
  cart: []
};

export const Reducer = (INITIAL_STATE = InitialState) => {
  return (state = INITIAL_STATE, action: CartActions.CartActions) => {
    switch (action.type) {
      case CartActions.ADD_ITEM:
        const alreadyInTheCart = state.cart.find(
          item => item === action.payload
        );
        if (!alreadyInTheCart) {
          const cart = [...state.cart, action.payload];
          return { ...state, cart };
        }
        return state;
      case CartActions.REMOVE_ITEM:
        const cart = state.cart.filter(item => item !== action.payload);
        return { ...state, cart };
      default:
        return state;
    }
  };
};
