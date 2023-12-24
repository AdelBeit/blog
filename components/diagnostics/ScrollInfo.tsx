import React, { useState, useEffect, useRef } from "react";

interface Props {
  target?: HTMLElement; // Optional target element prop
}

const ScrollInfo = ({ target }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [documentScrollPosition, setDocumentScrollPosition] = useState(0);
  const [nodeHeight, setNodeHeight] = useState(0);
  const [docHeight, setDocHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const updateInfo = (e?: MouseEvent) => {
    // If a target is not provided, use the document element
    const node = target || document.documentElement;
    const nodeHeight = node.scrollHeight - node.clientHeight;
    const windowHeight = window.innerHeight;
    const nodeScrollPosition = node.scrollTop; // from top
    const doc = document.documentElement;
    const docScrollPosition = doc.scrollTop;
    const docHeight = doc.scrollHeight - doc.clientHeight;

    setScrollPosition(nodeScrollPosition);
    setDocumentScrollPosition(docScrollPosition);
    setNodeHeight(nodeHeight);
    setDocHeight(docHeight);
    setWindowHeight(windowHeight);
  };
  useEffect(() => {
    const node = target || document.documentElement;
    if (typeof window === "undefined") return;

    // Set up event listeners
    node.addEventListener("scroll", updateInfo);
    node.addEventListener("resize", updateInfo);
    updateInfo();
    // Clean up event listeners on component unmount
    return () => {
      node.removeEventListener("scroll", updateInfo);
      node.removeEventListener("resize", updateInfo);
    };
  }, [target]);

  return (
    <div className="bg-black flex flex-col p-3 w-[300px]">
      <div>Node Scroll Position: {scrollPosition}</div>
      <div>Doc Scroll Position: {scrollPosition}</div>
      <div>Node Height: {nodeHeight}</div>
      <div>Doc Height: {docHeight}</div>
      <div>Window Height: {windowHeight}</div>
    </div>
  );
};

export default ScrollInfo;
