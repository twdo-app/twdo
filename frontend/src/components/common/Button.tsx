import { MouseEventHandler } from "react";

export default function Button(props: {
  className?: string;
  onClick?: MouseEventHandler<any>;
  children: string;
}) {
  return (
    <button
      onClick={props.onClick}
      className={`
        ${props.className}
        flex justify-center items-center rounded-md cursor-pointer outline outline-1
        outline-bg-blue-400/20 dark:outline-bg-pink-400/20 px-3 py-2
        transition-all
        bg-blue-400/10 outline-blue-400/30 active:bg-blue-400/20
        dark:bg-pink-400/10 dark:outline-pink-400/30 dark:active:bg-pink-400/20
      `}
    >
      {props.children}
    </button>
  );
}
