"use client";
import { useEffect, useState } from "react";
import { CMS_NAME } from "../lib/constants";
import getScrollPercentage from "../lib/getScrollPercentage";

const Intro = () => {
  const [progress, setProgress] = useState(1);
  const scrollTrackerColor = "orange-300";
  const getProgress = () => {
    const scrollPercentage = getScrollPercentage();
    setProgress(1 + Math.floor(scrollPercentage * 3));
    console.log(progress);
  };
  useEffect(() => {
    document.addEventListener("scroll", getProgress);
    return () => document.removeEventListener("scroll", getProgress);
  });
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      {/* <div className="scroll-tracker flex fixed gap-[50px] bg-white p-4 border-2">
        {progress}
        <div className="scroll-tracker-block w-[20px] h-[20px] bg-orange-300"></div>
        <div
          className={`scroll-tracker-block w-[20px] h-[20px] ${
            (progress > 1 ? "bg" : "border-2 border") + "-" + scrollTrackerColor
          }`}
        ></div>
        <div
          className={`scroll-tracker-block w-[20px] h-[20px] ${
            (progress > 2 ? "bg" : "border-2 border") + "-" + scrollTrackerColor
          }`}
        ></div>
        <div
          className={`scroll-tracker-block w-[20px] h-[20px] ${
            (progress > 3 ? "bg" : "border-2 border") + "-" + scrollTrackerColor
          }`}
        ></div>
      </div> */}
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}.
      </h4>
    </section>
  );
};

export default Intro;
