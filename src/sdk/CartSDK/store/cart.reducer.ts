import * as CartActions from "./cart.action";

type Cart = Array<string>;

interface Action {
  type: string;
  payload?: any;
}

/*  
EXAMPLE IF STATE IS AN OBJECT 
return {
  ...state,
  DEEP_CLONES STATES
  // and then override the property that needs to be updated
  todos: [...state.todos, { label: 'Build Redux,', complete: false }],
};
 */

export const Reducer = (INITIAL_STATE: Cart = []) => {
  return (state = INITIAL_STATE, action: Action) => {
    /* IN THESE EXAMPLE CART STATE is ARRAY of STRING(id's) */
    switch (action.type) {
      case CartActions.ADD_ITEM:
        const alreadyInTheCart = state.find(id => id === action.payload);
        if (!alreadyInTheCart) {
          return [...state, action.payload];
        }
        return state;
      case CartActions.REMOVE_ITEM:
        const cart = state.filter(id => id !== action.payload);
        return { ...state, cart };
      default:
        return state;
    }
  };
};
