import cs from "classnames";

type Props = {
  innerClasses?: string;
  outerClasses?: string;
};

const BlogCardFrame = ({ innerClasses = "", outerClasses = "" }: Props) => (
  <div className={cs("absolute inset-0", outerClasses)}>
    <div className={cs("absolute inset-0 bg-cyber-black", innerClasses)}></div>
  </div>
);

export default BlogCardFrame;
