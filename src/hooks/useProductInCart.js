import { useCart } from "./useCart";

export const useProductInCart = () => {
    const [ cart, setCart ] = useCart();

    const getExistingProduct = (productId, productOptions) => {
        return cart.find((cartProduct) => {
            return cartProduct.productId === productId && optionsMatch(cartProduct.options, productOptions);
        })
    }

    const addToCartOrUpdateQuantity = (productId, productOptions, quantity) => {
        const existingProduct = cart.find((cartProduct) => {
            return cartProduct.productId === productId && optionsMatch(cartProduct.options, productOptions);
        })

        if (!existingProduct && quantity > 0){
            setCart([...cart, {productId, quantity, options: productOptions}])
        }
        else  if ( existingProduct && quantity <= 0) {
            const productIndex = cart.indexOf(existingProduct)
            if(productIndex >= 0) {
                setCart(cart.splice(productIndex, 1));
            }
        }
        else if ( existingProduct ) {
            existingProduct.quantity += quantity;
            setCart([...cart]);
        }
    }

    const removeProductsFromCart = (cartProducts) => {
        const existingCartProducts = cartProducts.map((cartProduct) => getExistingProduct(cartProduct.productId, cartProduct.selectedOptions))

        if (existingCartProducts && existingCartProducts.length > 0){
            let updatedCart = cart
            existingCartProducts.forEach((cartProduct) => {
                const productIndex = cart.indexOf(cartProduct)
                if(productIndex >= 0) {
                    updatedCart = updatedCart.splice(productIndex, 1);
                }
            })
            setCart([...updatedCart])
        }
    }

    const clearCart = () => {
        setCart([])
    }

    return { cart, addToCartOrUpdateQuantity, removeProductsFromCart, clearCart };
}

const optionsMatch = (productOptions, comparedProductOptions) => {
    if(!productOptions && !comparedProductOptions){
        return true;
    }
    else if(!productOptions || !comparedProductOptions){
        return false;
    }

    return !productOptions.some((option) => {
        return !comparedProductOptions.some((comparedOption) => {
            return comparedOption.name === option.name
                && comparedOption.selectedVariant.name === option.selectedVariant.name
        })
    })
}