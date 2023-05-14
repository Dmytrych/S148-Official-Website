import * as React from "react";
import { useEffect, useState } from "react";
import {
    type CartProductWithInfo,
    useCartWithProductInfo,
} from "../../../../hooks/useCartWithProductInfo";
import { styled } from "@mui/material";
import ImageBox from "../../../../components/ImageBox";
import { TextProductVariant } from "../../../../components/TextProductVariant";
import { ProductName } from "../../../../components/ProductName";
import { locale } from "../../../../locale/ua";
import { getPriceWithOptions } from "../../../../helpers/price";
import PriceTag from "../../../../components/PriceTag";
import { Size } from "../../../../components/PriceTag/PriceTag";

function CartProductList(): JSX.Element {
    const { cartWithProductInfo } = useCartWithProductInfo();

    return (
        <CartProductGridContainer>
            {cartWithProductInfo.map((productCartItem, index) => (
                <CartListItem key={index} productCartItem={productCartItem} />
            ))}
        </CartProductGridContainer>
    );
}

function CartListItem({
    productCartItem,
}: {
    productCartItem: CartProductWithInfo;
}): JSX.Element {
    const [unitPrice, setUnitPrice] = useState<number>();

    useEffect(() => {
        if (productCartItem.product && productCartItem.selectedOptions) {
            setUnitPrice(
                getPriceWithOptions(
                    productCartItem.product,
                    productCartItem.selectedOptions
                )
            );
        }
    }, [productCartItem.product, productCartItem.selectedOptions]);

    return (
        <CartListItemBox>
            <div>
                <ProductImage>
                    <ImageBox imageName={productCartItem.product.imageName} />
                </ProductImage>
            </div>
            <CellContainer>
                <CellCaption>{locale.product_name}</CellCaption>
                <CellValue>
                    <ProductName
                        value={productCartItem.product.name}
                        size="medium"
                    />
                </CellValue>
            </CellContainer>
            <CellContainer>
                <CellCaption>{locale.options}</CellCaption>
                <CellValue>
                    <SelectedOptionList>
                        {productCartItem.selectedOptions.map(
                            (option, index) => (
                                <Option key={index}>
                                    <OptionName>
                                        {option.option.name}:
                                    </OptionName>{" "}
                                    <TextProductVariant
                                        variantName={
                                            option.selectedVariant.name
                                        }
                                        selected={true}
                                    />
                                </Option>
                            )
                        )}
                    </SelectedOptionList>
                </CellValue>
            </CellContainer>
            <CellContainer>
                <CellCaption>{locale.quantity}</CellCaption>
                <CellValue>{productCartItem.quantity}</CellValue>
            </CellContainer>
            <CellContainer>
                <CellCaption>{locale.unit_price}</CellCaption>
                <CellValue>
                    <PriceTag value={unitPrice} size={Size.Small}></PriceTag>
                </CellValue>
            </CellContainer>
            <CellContainer>
                <CellCaption>{locale.total}</CellCaption>
                <CellValue>
                    <PriceTag
                        size={Size.Medium}
                        value={unitPrice * productCartItem.quantity}
                    ></PriceTag>
                </CellValue>
            </CellContainer>
        </CartListItemBox>
    );
}

export default CartProductList;

const CellContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
});

const CellCaption = styled("div")({
    display: "flex",
    justifyContent: "center",
});

const CellValue = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
});

const SelectedOptionList = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    flexWrap: "wrap",
    gap: "5px",
});

const Option = styled("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap: "5px",
});

const OptionName = styled("div")({});

const ProductImage = styled("div")({
    width: "150px",
    height: "150px",
});

const CartListItemBox = styled("div")({
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1.5fr 1fr 1fr 1fr",
    border: "2px solid var(--global-color-primary)",
    borderRadius: "10px",
    padding: "5px",
});

const CartProductGridContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "5px",
});
