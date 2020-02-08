import { createSelector } from "reselect";

const selectCart = state => state.cart; // pull state and return a piece of the state

// now a memoized selector
export const selectCartItems = createSelector(  // carItems => item on the cart state
  [selectCart], // array of input selectors could also be [selectCart, selectUser] and below..(cart, user)
  cart => cart.cartItems // function to return the value you want.. each output of the input selectors in the order it was written
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

// more specific selector
export const selectCartItemsCount = createSelector(
  [selectCartItems], 
  cartItems =>
    cartItems.reduce( 
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
