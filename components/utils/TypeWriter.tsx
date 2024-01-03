"use-client";
import cs from "classnames";
import { useEffect, useRef } from "react";
import Typer from "../../lib/Typer";

type cbOptionalArgs = { target?: HTMLSpanElement; typer?: Typer };

interface Props {
  content: string;
  extraStyles?: string;
  cb?: (args?: cbOptionalArgs) => void;
}

export function TypeWriter({
  content,
  extraStyles = "",
  cb = ({}) => {},
}: Props) {
  const ref = useRef<null | HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const target: HTMLSpanElement = ref.current;
    const typer = new Typer(target, content);
    let startDelayTimeout: number;
    startDelayTimeout = window.setTimeout(() => {
      typer.start();
      clearTimeout(startDelayTimeout);
    }, 500);

    return () => {
      typer.stop();
    };
  }, [ref.current]);

  return (
    <div className={cs('relative', extraStyles)}>
      <span ref={ref} className={cs("absolute z-[1] left-0 top-0", cs(extraStyles))}></span>
      <span className="_temp text-cyber-black select-none" aria-hidden>{content}.</span>
    </div>
  );
}
