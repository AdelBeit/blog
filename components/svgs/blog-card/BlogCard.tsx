import { ReactNode, forwardRef, useCallback, useEffect, useState } from "react";
import PostBody from "../../post-body";
import ProgressBlock from "./ProgressBlock";
import styles from "./BlogCard.module.css";
import cs from "classnames";
import BlogCardFrame from "./BlogCardFrame";
import isVisible from "../../../lib/isVisible";

type Props = {
  preview?: boolean;
  children?: ReactNode;
  showProgress?: boolean;
};

const BlogCard = ({
  preview = false,
  showProgress = false,
  children,
}: Props) => {
  const [blogCard, setBlogCard] = useState<HTMLElement>(null);
  const [pageNode, setPageNode] = useState<HTMLElement>(null);
  useState<NodeListOf<SVGElement>>(null);
  const [activeBlocks, setActiveBlocks] = useState(0);
  const TOTAL_READ_BLOCKS = 50;

  const enableScroll = useCallback(
    (node: HTMLElement) => (node.style.overflowY = "scroll"),
    []
  );
  const disableScroll = useCallback(
    (node: HTMLElement) => (node.style.overflowY = "hidden"),
    []
  );
  const handleScroll = (e: MouseEvent) => {
    if (isVisible(blogCard)) {
      enableScroll(blogCard);
      const currScrollPercentage = parseInt(
        getComputedStyle(document.querySelector("#progress")).getPropertyValue(
          "--scrolled"
        )
      );
      console.log(
        getComputedStyle(document.querySelector("#progress")).getPropertyValue(
          "--scrolled"
        )
      );
      const activeblocks = currScrollPercentage / (100 / TOTAL_READ_BLOCKS);
      setActiveBlocks(activeblocks);
    } else {
      disableScroll(blogCard);
    }
  };

  const cardRef = useCallback((node: HTMLElement) => {
    if (node) {
      const page = document.querySelector("#page_container") as HTMLElement;
      setBlogCard(node);
      setPageNode(page);
      const card = page.querySelector(".overflow-y-scroll") as HTMLElement;
      card.style["scroll-timeline"] = "--blog-scroll y";
      const progress = document.querySelector("#progress") as HTMLElement;
      progress.style["animation-timeline"] = "--blog-scroll";
    }
  }, []);
  useEffect(() => {
    if (!blogCard) return;
    blogCard.addEventListener("scroll", handleScroll);
    return () => blogCard.removeEventListener("scroll", handleScroll);
  }, [blogCard]);
  useEffect(() => {
    if (!pageNode) return;
    pageNode.addEventListener("scroll", handleScroll);
    return () => pageNode.removeEventListener("scroll", handleScroll);
  }, [pageNode]);
  return (
    <div
      className={cs(styles["subcontainer"], "relative w-full h-full mb-[30px]")}
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
          "absolute flex flex-col-reverse inset-x-0 z-[5] h-full pt-[10px] lg:pb-[20px] pb-[8px] mx-[2%] mr-[2%] max-[425px]:mr-[5%] max-[1800px]:mr-[3%] gap-[10px] md:gap-[20px]"
        )}
      >
        <div
          id="progress_container"
          className={cs(
            "relative flex flex-row items-center z-[10]",
            !showProgress && "invisible"
          )}
        >
          {[...Array(TOTAL_READ_BLOCKS)].map((v, _i) => (
            <ProgressBlock
              index={_i}
              key={_i}
              active={_i + 1 <= activeBlocks}
            />
          ))}
        </div>
        <div
          ref={cardRef}
          className="w-full h-full overflow-y-scroll hide_scroll"
        >
          <div
            className="invisible fixed top-50 w-fit z-[11]"
            id="progress"
          ></div>
          {children}
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
