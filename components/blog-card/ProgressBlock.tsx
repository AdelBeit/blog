import { COLORS } from "../../lib/constants";
import { SVGProps } from "./types";
type Props = Omit<SVGProps, "height"> & {
  active?: boolean;
  index?: number;
};

const ProgressBlock = ({ active = true, width = "100%", index = 0 }: Props) => {
  let d = "M19 0L9.5 0L7.885 3.06L0 18L9.5 18L11.78 13.68L19 0Z";
  let viewbox = "0 0 19 18";
  let strokeWidth = 0;
  let stroke = "none";
  let fillColor = COLORS.CYBER_GREEN;
  let fill = "currentColor";
  if (!active) {
    fill = "none";
    stroke = "currentColor";
    d =
      "M11.645 4.48757L0.838243 24.5H13.2018L16.3 18.7624L26.1618 0.5L13.7982 0.5L11.645 4.48757Z";
    viewbox = "0 0 27 25";
    strokeWidth = 1;
  }
  return (
    <svg
      data-index={index}
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "50px",
        height: "100%",
        display: "block",
        color: fillColor,
      }}
      viewBox={viewbox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  );
};

export default ProgressBlock;
