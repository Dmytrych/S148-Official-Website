import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import React from 'react'
import RoundedButton from '../../../../components/RoundedButton';
import { locale } from '../../../../locale/ua';
import { noop } from '../../../../utils';
import './index.css'

function CartSummary({ handleSubmit, disableSubmit, cartProducts, removeCartItem = (cartProduct) => noop() }) {

    return (
        <div className='order-summary'>
            <h2>{locale.total}</h2>
            <div>
                {cartProducts.map(cartProduct => {
                    return <div key={cartProduct.product.id} className='order-product-summary-line'>
                        <div>
                            <DeleteOutlineOutlinedIcon color='error' onClick={() => removeCartItem(cartProduct.id)}/>
                        </div>
                        <div>
                            {cartProduct.quantity}x {cartProduct.product.name}
                        </div>
                        <div>
                            {cartProduct.quantity * cartProduct.product.unitPrice}₴
                        </div>
                    </div>
                })}
            </div>
            <div className='order-total-cost-line'>
                <div>
                    {locale.to_be_paid}
                </div>
                <div>
                    {cartProducts.reduce((acc, cartProduct) => acc + (cartProduct.product.unitPrice * cartProduct.quantity), 0)}₴
                </div>
            </div>
            <div className='order-confirm-button'>
                <RoundedButton text={locale.confirm_order} size='medium' disabled={disableSubmit} onClick={handleSubmit} />
            </div>
        </div>)
}

export default CartSummary;