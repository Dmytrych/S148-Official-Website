import React from 'react'
import {useCartWithProductInfo} from "../../../../hooks/useCartWithProductInfo";
import {styled} from "@mui/material";
import ImageBox from "../../../../components/ImageBox";
import {TextProductVariant} from "../../../../components/TextProductVariant";
import {ProductName} from "../../../../components/ProductName";

function CartProductList() {
    const { cartWithProductInfo} = useCartWithProductInfo()

    return (<CartProductGridContainer>
        { cartWithProductInfo.map((productCartItem, index) => <CartListItem key={index} productCartItem={productCartItem} />) }
    </CartProductGridContainer>)
}

function CartListItem({ productCartItem }) {
    return <CartListItemBox>
        <ProductImageContainer>
            <ProductImage>
                <ImageBox imageName={productCartItem.product.imageName} />
            </ProductImage>
        </ProductImageContainer>
        <ProductChoiceContainer>
            <CartProductName>
                <ProductName value={productCartItem.product.name} size='medium'/>
            </CartProductName>
            <SelectedOptionList>
                {productCartItem.selectedOptions.map((option, index) => <Option key={index}>
                    <OptionName>{option.optionName}:</OptionName> <TextProductVariant variantName={option.selectedVariant.name} selected={true} />
                </Option>)}
            </SelectedOptionList>
        </ProductChoiceContainer>
    </CartListItemBox>
}

export default CartProductList;

const CartProductName = styled('div')({
    marginBottom: '10px'
})

const SelectedOptionList = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px'
})

const Option = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '5px'
})

const OptionName = styled('div')({

})

const ProductImage = styled('div')({
    width: "150px",
    height: "150px"
})

const ProductImageContainer = styled('div')({
})

const ProductChoiceContainer = styled('div')({
    padding: "0px 20px 0px 20px"
})

const CartListItemBox = styled('div')({
    display: 'flex',
    flexDirection: 'row'
})

const CartProductGridContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column'
})