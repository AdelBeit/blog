import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import getScrollPercentage from "../../lib/getScrollPercentage";
import isVisible from "../../lib/isVisible";
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import BlogCard from "../../components/svgs/blog-card/BlogCard";
import ScrollInfo from "../../components/diagnostics/ScrollInfo";
import ReverseScroll from "../../components/diagnostics/ReverseScroll";
import styles from "../../components/diagnostics/style.module.css";
import { Sandbox } from "../../components/diagnostics/Sandbox";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const [blogCard, setBlogCard] = useState<HTMLElement>(null);
  const [pageNode, setPageNode] = useState<HTMLElement>(null);
  useState<NodeListOf<SVGElement>>(null);
  const [readProgress, setReadProgress] = useState(0);
  const TOTAL_READ_BLOCKS = 50;

  const enableScroll = useMemo(
    () => (node: HTMLElement) => (node.style.overflowY = "scroll"),
    []
  );
  const disableScroll = useMemo(
    () => (node: HTMLElement) => (node.style.overflowY = "hidden"),
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
      const activeblocks = currScrollPercentage / (100 / TOTAL_READ_BLOCKS);
      setReadProgress(activeblocks);
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
      className="relative text-cyber-green w-full h-full bg-cyber-black p-10 overflow-y-scroll hide_scroll"
      id="page_container"
    >
      <Sandbox />
    </div>
  );
  return (
    <div
      className="relative text-cyber-green w-full h-full bg-cyber-black p-10 overflow-y-scroll hide_scroll"
      id="page_container"
    >
      <BlogCard
        totalBLocks={TOTAL_READ_BLOCKS}
        activeBlocks={readProgress}
        ref={cardRef}
      >
        <>
          <div className="fixed top-50 w-fit z-[11]" id="progress"></div>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />
        </>
      </BlogCard>
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
      <p>lorem ipsum</p>
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
