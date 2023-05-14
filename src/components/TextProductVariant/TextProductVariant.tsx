import {styled} from "@mui/system";
import { noop } from '../../utils'

type TextProductVariantInput = {
    variantName: string,
    selected: boolean,
    onClick?: () => void
}

export const TextProductVariant = ({variantName, selected, onClick = noop}: TextProductVariantInput) => {
    return (<TextVariantContainer selected={selected} onClick={onClick}>{variantName}</TextVariantContainer>)
}

export const VariantContainer = styled('div')((props: { selected: boolean }) => {
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