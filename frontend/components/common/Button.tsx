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
      flex justify-center items-center
      ${children ? "px-4 py-2 rounded-md" : "p-3 rounded-full"}
      ${
        theme === "text"
          ? "hover:bg-primary-subtle cursor-default transition-colors font-bold"
          : theme === "hyperlink"
          ? "hover:underline cursor-pointer text-link underline-offset-1 decoration-2"
          : "text-fgb bg-primary cursor-pointer font-bold"
      }
      gap-4
      ${className}
      ${icon && !children ? "h-8 w-8" : ""}
      `}
    >
      {icon ? icon : ""}
      {children}
    </button>
  );
}
