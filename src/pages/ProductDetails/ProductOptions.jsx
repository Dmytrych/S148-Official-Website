import { Box } from "@mui/material"
import { styled } from "@mui/system"
import { useState } from "react"
import ImageBox from "../../components/ImageBox"

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
                        ? <TextVariant variant={variant} selected={variant.name === selection.name} onClick={() => onVariantClick(variant)}/>
                        : <ImageVariant variant={variant} selected={variant.name === selection.name} onClick={() => onVariantClick(variant)}/>
                    }
                </div>)
            })}
        </VariantsContainer>
    </OptionBlock>)
}

const TextVariant = ({variant, selected, onClick}) => {
    return (<TextVariantContainer selected={selected} onClick={onClick}>{variant.name}</TextVariantContainer>)
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

const VariantContainer = styled('div')((props) => {
    return {
        ":hover": {
            border: props.selected ? "var(--global-selected-border)" : "var(--global-hover-border)"
        },
        userSelect: "none",
        cursor: "pointer",
        borderRadius: "6px",
        border: props.selected ? "var(--global-selected-border)" : "var(--global-unselected-border)",
        width: "fit-content",
        height: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

const TextVariantContainer = styled(VariantContainer)({
    padding: "0px 10px"
})


const ImageVariantContainer = styled(VariantContainer)({
    width: "70px",
    height: "70px",
})