import { Box } from "@mui/material"
import { styled } from "@mui/system"
import { useState } from "react"
import ImageBox from "../../components/ImageBox"
import {TextProductVariant, VariantContainer} from "../../components/TextProductVariant";

const optionTypes = {
    text: "text",
    image: "image"
}

export const ProductVersions = ({option, onChange, defaultValue = undefined}) => {
    const [ selection, setSelection ] = useState(defaultValue ?? option.variants[0])
    const onVariantClick = (variant) => {
        setSelection(variant)
        onChange(variant)
    }

    return (<OptionBlock>
        <Box sx={{ marginBottom: "10px" }}>{option.name}: {selection.name}</Box>
        <VariantsContainer>
            {option?.variants.map(variant => {
                return (<div key={variant.name}>
                    {
                        option.type !== optionTypes.image
                        ? <TextProductVariant variantName={variant.name} selected={variant.name === selection.name} onClick={() => onVariantClick(variant)}/>
                        : <ImageVariant variant={variant} selected={variant.name === selection.name} onClick={() => onVariantClick(variant)}/>
                    }
                </div>)
            })}
        </VariantsContainer>
    </OptionBlock>)
}

const ImageVariant = ({variant, selected, onClick}) => {
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