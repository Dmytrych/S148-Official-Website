import { Box } from "@mui/material"
import { styled } from "@mui/system"

const topBarHeight = "80px"

export const WholeWindowBlock = ({children}) => {
    return (<PageHeight>
        {children}
    </PageHeight>)
}

const PageHeight = styled(Box)({
    height: `calc(100vh - ${topBarHeight})`
})