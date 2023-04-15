import { styled } from "@mui/system";
import { appSettings } from "../../appSettings";

const ImageBox = ({ imageName }) => {
    return (<Image src={`${appSettings.imagesHost}/${imageName}`} />)
}

export default ImageBox;

const Image = styled("img")({
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    objectFit: "cover"
})