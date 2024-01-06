"use-client";
import cs from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import Typer from "../../lib/Typer";

type cbOptionalArgs = { target?: HTMLSpanElement; typer?: Typer };

interface Props {
  content: string;
  classes?: string;
  cb?: (args?: cbOptionalArgs) => void;
}

export function TypeWriter({ content, classes = "", cb = ({}) => {} }: Props) {
  const [contentNode, setContentNode] = useState<HTMLSpanElement>(null);

  const contentRef = useCallback((node: HTMLElement) => {
    if (node) {
      setContentNode(node);
    }
  }, []);
  useEffect(() => {
    if (!contentNode) return;

    const target: HTMLSpanElement = contentNode;
    const typer = new Typer(target, content);
    let startDelayTimeout: number;
    startDelayTimeout = window.setTimeout(() => {
      typer.start();
      clearTimeout(startDelayTimeout);
    }, 500);

    return () => {
      typer.stop();
    };
  }, [contentNode]);

  return (
    <div className={cs("relative", classes)}>
      <span
        ref={contentRef}
        className={cs("absolute z-[1] left-0 top-0", cs(classes))}
      ></span>
      <span className="_temp text-cyber-black select-none" aria-hidden>
        {content}.
      </span>
    </div>
  );
}
