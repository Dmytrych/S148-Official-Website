import React from 'react';

const CartContext = React.createContext({
  cart: {},
  saveCart: (state) => {}
});
export default CartContext;