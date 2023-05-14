import { useEffect, useState } from "react";
import { getAllProductsFiltered } from "../repositories/api";
import { useProductInCart } from "./useProductInCart";
import { ProductDto } from '../repositories/api/Dto/ProductDto'
import { CartProduct, OptionSelection } from '../contexts/CartContext'

export type CartProductWithInfo = {
    product: ProductDto,
    selectedOptions: OptionSelection[],
    quantity: number
}

export const useCartWithProductInfo = () => {
    const { cart, removeProductsFromCart } = useProductInCart()
    const [ cartWithProductInfo, setCartWithProductInfo] = useState<CartProductWithInfo[]>([])

    useEffect(() => {
        async function fetchData() {
            const productIds = cart.map((cartProduct) => cartProduct.productId)
            console.log(productIds)
            const retrievedProducts = await getAllProductsFiltered(productIds)
            const successfullyFoundProducts: CartProductWithInfo[] = []
            const failedToFindCartProducts: CartProduct[] = []

            cart.forEach((cartProduct) => {
                const retrievedProduct = retrievedProducts.find((retrievedProduct) => retrievedProduct.id === cartProduct.productId)
                if (!retrievedProduct){
                    failedToFindCartProducts.push(cartProduct)
                    return;
                }

                successfullyFoundProducts.push({
                    selectedOptions: cartProduct.selectedOptions,
                    product: retrievedProduct,
                    quantity: cartProduct.quantity
                } as CartProductWithInfo)
            })

            console.log(failedToFindCartProducts)

            if(failedToFindCartProducts && failedToFindCartProducts.length > 0){
                removeProductsFromCart(failedToFindCartProducts)
            }
            if(successfullyFoundProducts && successfullyFoundProducts.length > 0){
                setCartWithProductInfo(successfullyFoundProducts)
            }
        }

        fetchData();
    }, [cart]);

    return { cartWithProductInfo };
}