import { MouseEventHandler } from "react";

export default function Button({
  className,
  onClick,
  icon,
  children,
  type,
}: {
  className?: string;
  onClick?: MouseEventHandler<any>;
  icon?: React.ReactNode;
  children: string;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
      text-sm
      flex justify-center items-center rounded-md cursor-pointer outline outline-1
      outline-bg-blue-400/20 dark:outline-bg-pink-400/20 px-3 py-2
      transition-all
      hover:bg-blue-400/20 dark:hover:bg-pink-400/20
      text-blue-400 dark:text-pink-400
      bg-blue-400/10 outline-blue-400/30 active:bg-blue-400/30
      dark:bg-pink-400/10 dark:outline-pink-400/30 dark:active:bg-pink-400/30
      gap-4
      ${className}
      `}
    >
      {icon ? icon : ""}
      {children.toUpperCase()}
    </button>
  );
}
