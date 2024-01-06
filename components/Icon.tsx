import { ReactNode } from "react";

type Props = {
  link?: string;
  classes?: string;
  children?: ReactNode;
};
const Icon = ({ link = "", classes = "", children }: Props) => {
  return (
    <a href={link} target="_blank">
      {children || <div className={classes}></div>}
    </a>
  );
};

export default Icon;
