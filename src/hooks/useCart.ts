import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const useCart = () => {
    const { cart, saveCart } = useContext(CartContext)
    return { cart, saveCart };
}