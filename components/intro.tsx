"use client";
import { CMS_NAME } from "../lib/constants";
import { TypeWriter } from "./utils/TypeWriter";

const Intro = () => {

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <TypeWriter content="Blog" />
      </h1>
    </section>
  );
};

export default Intro;
