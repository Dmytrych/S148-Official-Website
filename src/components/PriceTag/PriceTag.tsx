import { styled } from "@mui/system";

export enum Size {
    Small = "small",
    Medium = "medium",
    Big = "big",
}

const PriceTag = ({
    value,
    size = Size.Big,
}: {
    value: number;
    size?: Size;
}): JSX.Element => {
    return (
        <div>
            <PriceTagContent size={size}>{value}</PriceTagContent>
            <span style={{ fontSize: size === Size.Big ? "1.5em" : "1em" }}>
                ₴
            </span>
        </div>
    );
};

export default PriceTag;

const PriceTagContent = styled("span")(({ size }: { size: Size }) => {
    return {
        fontSize: size === Size.Big ? "2em" : "1em",
        marginLeft: "20px",
    };
});
