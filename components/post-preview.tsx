import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import BlogCardFrame from "./blog-card/BlogCardFrame";
import styles from "./PostPreview.module.css";
import cs from "classnames";
import { useCallback, useEffect, useRef } from "react";
import TagChip from "./tag-chips";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  tags?:string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags='galaxy, planet, world',
}: Props) => {
  return (
    <div
      className={cs(
        "relative w-full md:whitespace-nowrap md:hover:[white-space:wrap] lg:text-2xl md:text-lg pb-1",
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
            "relative z-[5] min-w-fit overflow-x-hidden p-2 grid grid-rows-[1fr max-content] gap-y-4 sm:gap-y-6 gap-x-4 grid-cols-2"
          )}
        >
          <span className={cs("leading-tight col-span-2 inline-block")}>
            {title}
          </span>
          <span className="flex flex-wrap gap-2 text-[0.5rem] md:text-[0.825rem] sm:text-sm sm:gap-4 row-start-2 row-end-3 justify-self-start align-self-end max-w-full">
            {tags.split(',').map((t) => (
              <TagChip name={t}></TagChip>
            ))}
          </span>
          <span className="row-start-2 row-end-3 text-[0.7rem] md:text-sm lg:text-md place-self-end pr-2">
            <DateFormatter dateString={date} />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
