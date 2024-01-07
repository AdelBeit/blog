import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { GITHUB_PATH, HOME_PATH } from "../lib/constants";
import Post from "../interfaces/post";
import { TypeWriter } from "../components/utils/TypeWriter";
import Icon from "../components/Icon";
import Github from "../components/svgs/Github";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Adele's Blog`}</title>
        </Head>
        <div className="flex flex-col gap-5 mt-5 justify-between">
          <div className="flex justify-between h-[45px]">
            <a href={HOME_PATH}>
              <h2 className="text-md md:text-xl font-bold tracking-tighter leading-tight">
                <TypeWriter content="Blog" />
              </h2>
            </a>
            <Icon link={GITHUB_PATH}>
              <Github
                innerclasses={
                  "w-[40px] text-cyber-amber hover:text-cyber-green"
                }
              />
            </Icon>
          </div>
          <MoreStories posts={allPosts} />
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    'tags',
  ]);

  return {
    props: { allPosts },
  };
};
