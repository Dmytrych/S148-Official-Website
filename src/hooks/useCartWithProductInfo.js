import {useEffect, useState} from "react";
import {getAllProductsFiltered} from "../repositories/api";
import {useProductInCart} from "./useProductInCart";

export const useCartWithProductInfo = () => {
    const { cart, removeProductsFromCart } = useProductInCart()
    const [ cartWithProductInfo, setCartWithProductInfo] = useState([])

    useEffect(() => {
        async function fetchData() {
            const productIds = cart.map((cartProduct) => cartProduct.productId)
            const retrievedProducts = await getAllProductsFiltered(productIds)
            const successfullyFoundProducts = []
            const failedToFindCartProducts = []

            cart.forEach((cartProduct) => {
                const retrievedProduct = retrievedProducts.find((retrievedProduct) => retrievedProduct.id === cartProduct.productId)
                if (!retrievedProduct){
                    failedToFindCartProducts.push(cartProduct)
                    return;
                }

                successfullyFoundProducts.push({
                    selectedOptions: cartProduct.options,
                    product: retrievedProduct,
                    quantity: cartProduct.quantity
                })
            })

            setCartWithProductInfo(successfullyFoundProducts)
            removeProductsFromCart(failedToFindCartProducts)
        }

        fetchData();
    }, [ cart ]);

    return { cartWithProductInfo };
}