import { Box, styled } from '@mui/material'
import { useState } from "react"
import ImageBox from "../../components/ImageBox"
import {
    TextProductVariant,
    VariantContainer,
} from "../../components/TextProductVariant";
import { ImageOptionVariant, OptionType, ProductOptionVariant } from '../../repositories/api/Dto/OptionDto'
import { ProductOptionDto } from '../../repositories/api/Dto/ProductDto'

type ProductVersionsDisplayInput = {
    option: ProductOptionDto,
    onChange: (variant: ProductOptionVariant) => void,
    defaultValue?: ProductOptionVariant
}

export const ProductVersions = ({ option, onChange, defaultValue } : ProductVersionsDisplayInput) => {
    const [ selection, setSelection ] = useState(defaultValue ?? option.variants[0])
    const onVariantClick = (variant: ProductOptionVariant) => {
        setSelection(variant)
        onChange(variant)
    }

    return (<OptionBlock>
        <Box sx={{ marginBottom: "10px" }}>{option.name}: {selection.name}</Box>
        <VariantsContainer>
            {option?.variants.map(variant => {
                return (<div key={variant.name}>
                    {
                        option.type !== OptionType.Image
                        ? <TextProductVariant variantName={variant.name} selected={variant.name === selection.name} onClick={() => onVariantClick(variant)}/>
                        : <ImageVariant variant={variant} selected={variant.name === selection.name} onClick={() => onVariantClick(variant)}/>
                    }
                </div>)
            })}
        </VariantsContainer>
    </OptionBlock>)
}

type ImageVariantInput = {
    variant: ImageOptionVariant,
    selected: boolean,
    onClick: () => void
}

const ImageVariant = ({variant, selected, onClick}: ImageVariantInput) => {
    return (<ImageVariantContainer selected={selected} onClick={onClick}>
            <ImageBox imageName={variant.image} />
        </ImageVariantContainer>)
}

const OptionBlock = styled('div')({
    display: "flex",
    flexDirection: "column"
})

const VariantsContainer = styled('div')({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px"
})

const ImageVariantContainer = styled(VariantContainer)({
    width: "70px",
    height: "70px",
})