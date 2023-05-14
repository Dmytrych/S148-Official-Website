import { ProductOptionDto } from '../repositories/api/Dto/ProductDto'
import { ProductOptionVariant } from '../repositories/api/Dto/OptionDto'
import * as React from 'react';

export type CartProduct = {
  productId: number,
  selectedOptions: OptionSelection[],
  quantity: number
}

export type OptionSelection = {
  option: ProductOptionDto,
  selectedVariant: ProductOptionVariant
}

export const CartContext = React.createContext({
  cart: [] as CartProduct[],
  saveCart: (state: CartProduct[]) => {}
});