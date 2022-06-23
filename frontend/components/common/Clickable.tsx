import React, { LegacyRef, MouseEventHandler, ReactElement } from "react";

const Clickable = React.forwardRef(
  (
    props: {
      className?: string;
      onClick?: MouseEventHandler<any>;
      children: ReactElement | ReactElement[];
      type?: "button";
      disabled?: boolean;
    },
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <div
        onClick={props.onClick}
        className={`${
          props.className
            ? props.className
            : "flex flex-row rounded-md cursor-default items-center px-2 py-1 transition-clickable h-8 active:bg-blue-400/20 dark:active:bg-pink-400/20"
        }
        ${
          !props.disabled
            ? "hover:bg-blue-400/10 hover:outline-1 dark:hover:bg-pink-400/10"
            : ""
        }
      `}
      >
        {props.children}
      </div>
    );
  }
);

Clickable.displayName = "Clickable";
export default Clickable;
