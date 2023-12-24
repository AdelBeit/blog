"use client";

type FunctionType = (node: HTMLElement, partial?: boolean) => boolean;

const isVisible: FunctionType = (
  node,
  partial = false
) => {
  if(!node) return false;
  const { top, bottom } = node.getBoundingClientRect();
  const innerHeight = window.innerHeight;
  return partial
    ? top < innerHeight || bottom > 0
    : top > 0 && bottom < innerHeight;
};

export default isVisible;