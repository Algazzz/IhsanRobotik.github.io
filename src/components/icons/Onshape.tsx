import type { IconType } from "react-icons";

const OnshapeIcon: IconType = ({ className }) => (
    <img
        src="/icons/onshape.png"
        alt="Onshape"
        className={className}
        style={{ display: "block", width: "1em", height: "1em", objectFit: "contain", filter: "grayscale(100%)" }}
    />
);

export default OnshapeIcon;
