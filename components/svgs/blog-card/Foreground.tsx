import { SVGProps } from "../types";
type Props = SVGProps & {
  strokeWidth?: number;
};

const Foreground = ({
  fill = "#282828f0",
  stroke = "#33FF00",
  strokeWidth = 4,
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
      width="100%"
      height="100%"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 11.3294L11.3457 2H338L338 287.989L302.778 318.501L9.57111 318.998L2 307.604V11.3294Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default Foreground;
