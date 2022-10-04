import React from 'react';

const CartContext = React.createContext({
  cart: {},
  saveCart: () => {}
});
export default CartContext;