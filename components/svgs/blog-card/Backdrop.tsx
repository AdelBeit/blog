import { SVGProps as Props } from "../types";

const Backdrop = ({
  fill = "#33FF00",
  stroke = "none",
  width,
  height,
}: Props) => {
  const style = { display: "block" };
  if (width) {
    style["width"] = width;
  }
  if (height) {
    style["height"] = height;
  }
  return (
    <svg
      width="100%" height="100%"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5183 0.5H340L340 278.903L303.525 310.5L8.5 311L0 298.208V0.5H10.5183Z"
        fill={fill}
        stroke-color={stroke}
      />
    </svg>
  );
};

export default Backdrop;
