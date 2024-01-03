import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import BlogCardFrame from "./svgs/blog-card/BlogCardFrame";
import styles from "./PostPreview.module.css";
import cs from "classnames";
import { useCallback, useEffect, useRef } from "react";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div
      className={cs(
        "relative w-full whitespace-nowrap hover:[white-space:wrap]",
        styles["container"]
      )}
    >
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <BlogCardFrame
          outerClasses={cs("z-[2]", styles["card_graphic_wrapper"])}
          innerClasses={cs("", styles["card_graphic"])}
        />
        <div
          className={cs(
            "relative z-[5] min-w-fit overflow-x-hidden p-2 grid grid-rows-[1fr max-content] gap-y-4 grid-cols-1"
          )}
        >
          <span className={cs("text-xl leading-tight inline-block")}>
            {title} lorem ipsum hellow workdlorem ipsum hellow workdlorem ipsum
            hellow workdlorem ipsum hellow workd
          </span>
          <span className="place-self-end pr-2">
            <DateFormatter dateString={date} />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
