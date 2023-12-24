import { ReactNode, forwardRef } from "react";
import Backdrop from "./Backdrop";
import Foreground from "./Foreground";
import PostBody from "../../post-body";
import styles from "../../../components/diagnostics/style.module.css";
import ProgressBlock from "./ProgressBlock";

type Props = {
  content?: ReactNode;
  activeBlocks: number;
  totalBLocks: number;
  children?: ReactNode;
};

const BlogCard = forwardRef<HTMLDivElement, Props>(
  ({ content, activeBlocks, totalBLocks, children }, ref) => {
    return (
      <div className="relative w-full h-full" id="subcontainer">
        <div className="absolute w-full h-full z-[2]">
          <img
            src="/assets/components/blog-card/card.svg"
            className="w-[100%] h-[100%]"
          />
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 340 321"
            preserveAspectRatio="none"
            x="0"
            y="0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="blogCardForegroundClip">
                <path
                  d="M2 11.3294L11.3457 2H338L338 287.989L302.778 318.501L9.57111 318.998L2 307.604V11.3294Z"
                  fill="#282828"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="_content absolute flex flex-col left-0 right-0 z-[5] h-full pt-[10px] pb-[20px] mx-[5%] mr-[10%] gap-[20px]">
          <div
            id="progress_container"
            className="relative flex flex-row items-center z-[10]"
          >
            {[...Array(totalBLocks)].map((v, _i) => (
              <ProgressBlock index={_i} active={_i + 1 <= activeBlocks} />
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
