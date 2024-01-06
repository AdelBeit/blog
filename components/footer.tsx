import Container from "./container";
import { GITHUB_PATH } from "../lib/constants";
import Icon from "./Icon";
import Github from "./svgs/Github";
import BlogCardFrame from "./blog-card/BlogCardFrame";
import { TypeWriter } from "./utils/TypeWriter";
import cs from "classnames";

type Props = {
  classes?:string;
}

const Footer = ({classes=""}:Props) => {
  return (
    <footer className={cs("items-center justify-between flex", classes)}>
      <h2 className="text-[0.65rem] sm:text-[0.8rem] lg:text-[1rem] font-bold tracking-tighter leading-tight">
        <TypeWriter content="Thanks for reading" />
      </h2>
      <Icon link={GITHUB_PATH}>
        <Github innerclasses={"w-[40px] text-cyber-amber hover:text-cyber-green"} />
      </Icon>
    </footer>
  );
};

export default Footer;
