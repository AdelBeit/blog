import { ReactNode, forwardRef } from "react";
import PostBody from "../../post-body";
import ProgressBlock from "./ProgressBlock";
import styles from "./BlogCard.module.css";
import cs from "classnames";
import BlogCardFrame from "./BlogCardFrame";

type Props = {
  preview?: boolean;
  activeBlocks: number;
  totalBLocks: number;
  children?: ReactNode;
};

const BlogCard = forwardRef<HTMLDivElement, Props>(
  ({ preview = false, activeBlocks, totalBLocks, children }, ref) => {
    return (
      <div
        className={cs(
          styles["subcontainer"],
          "relative w-full h-full mb-[30px]"
        )}
        id="subcontainer"
      >
        <BlogCardFrame
          outerClasses={cs(
            "z-[2] lg:pb-[10px] sm:pb-0",
            styles["card_graphic_wrapper"]
          )}
          innerClasses={cs(styles["card_graphic"])}
        />
        <div
          className={cs(
            styles["content"],
            "absolute flex flex-col-reverse left-0 right-0 z-[5] h-full pt-[10px] lg:pb-[20px] pb-[8px] mx-[2%] gap-[10px] md:gap-[20px]"
          )}
        >
          <div
            id="progress_container"
            className="relative flex flex-row items-center z-[10]"
          >
            {[...Array(totalBLocks)].map((v, _i) => (
              <ProgressBlock
                index={_i}
                key={_i}
                active={_i + 1 <= activeBlocks}
              />
            ))}
          </div>
          <div
            ref={ref}
            className="w-full h-full overflow-y-scroll hide_scroll"
          >
            {children}
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </div>
        </div>
      </div>
    );
  }
);
export default BlogCard;
