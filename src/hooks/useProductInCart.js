import { useCart } from "./useCart";

export const useProductInCart = (productId) => {
    const [ cart, setCart ] = useCart();

    const setQuantity = (quantity) => {
        if(quantity > 0){
            cart[productId] = quantity;
        }
        else {
            delete cart[productId];
        }
        setCart({...cart});
    }

    return [ cart[productId] || 0, setQuantity ];
}