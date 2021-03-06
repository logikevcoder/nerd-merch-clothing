export const addItemToCart = (cartItems, cartItemToAdd) => {
  // set this const variable to be the cartItem where the id matches the item to add
  const existingCartItem = cartItems.find(
    // if this is true return below
    cartItem => cartItem.id === cartItemToAdd.id //get each individual item, if the id matches the item to add's id
  );

  // if the item exists above
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } // return new object with the quantity + 1
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // set this const variable to be the cartItem where the id matches the item to remove
  const existingCartItem = cartItems.find(
    // if this is true return below
    cartItem => cartItem.id === cartItemToRemove.id //get each individual item, if the id matches the item to remove's id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
