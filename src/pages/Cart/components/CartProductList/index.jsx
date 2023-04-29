import React from 'react'
import {useCartWithProductInfo} from "../../../../hooks/useCartWithProductInfo";

function CartProductList() {
    const {cartWithProductInfo} = useCartWithProductInfo()

    return (<div>
    </div>)
}

function CartListItem({ productCartItem }) {
    return <div>

    </div>
}

export default CartProductList;