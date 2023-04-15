import { useContext } from "react"
import CartContext from "../contexts/CartContext"

export const useCart = () => {
    const cartContext = useContext(CartContext)
    return [ cartContext.cart, cartContext.saveCart ];
}