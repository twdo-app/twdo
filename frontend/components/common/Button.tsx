import { MouseEventHandler } from "react";

export default function Button({
  className,
  onClick,
  icon,
  children,
  type,
  theme,
}: {
  className?: string;
  onClick?: MouseEventHandler<any>;
  icon?: React.ReactNode;
  children?: string;
  type?: "button" | "submit" | "reset";
  theme?: "default" | "text" | "hyperlink";
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
      text-sm
      flex justify-center items-center rounded-full
      ${children ? "px-5 py-2" : "p-3"}
      ${
        theme === "text"
          ? "hover:bg-primary-subtle cursor-default transition-colors font-bold"
          : theme === "hyperlink"
          ? "hover:underline cursor-pointer text-link underline-offset-1 decoration-2"
          : "text-fgb bg-primary cursor-pointer font-bold"
      }
      gap-4
      active:shadow-[0_0_0_#00333d]
      ${className}
      ${icon && !children ? "h-8 w-8" : ""}
      `}
    >
      {icon ? icon : ""}
      {children}
    </button>
  );
}
