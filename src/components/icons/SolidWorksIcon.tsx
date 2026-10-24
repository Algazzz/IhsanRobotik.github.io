import type { IconType } from "react-icons";

const SolidWorksIcon: IconType = ({ className }) => (
    <img
        src="/icons/solidworks.png"
        alt="SolidWorks"
        className={className}
        style={{ display: "block", width: "1em", height: "1em", objectFit: "contain", filter: "grayscale(100%)" }}
    />
);

export default SolidWorksIcon;
