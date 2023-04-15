import { styled } from "@mui/system";

const PriceTag = ({value}) => {
    return (<div>
        <PriceTagContent>{value}</PriceTagContent><span style={{ fontSize: "1.5em" }}>₴</span>
    </div>)
}

export default PriceTag;

const PriceTagContent = styled("span")({
    fontSize: "2em",
    marginLeft: "20px"
})