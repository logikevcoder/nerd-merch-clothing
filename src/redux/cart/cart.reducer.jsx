import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // spread in existing array, and append any new items to the array
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
