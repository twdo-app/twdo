import React, { InputHTMLAttributes, LegacyRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  className?: string;
}

const TextInput = React.forwardRef(
  (
    { type, placeholder, className, ...otherProps }: InputProps,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <input
        {...otherProps}
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`
      ${className}
      w-full rounded-md px-3 py-2 outline-transparent border border-solid
      bg-slate-400/10 dark:bg-slate-600/10
      placeholder:text-slate-600/60 dark:placeholder:text-slate-400/60
      border-slate-400/30 dark:border-slate-600/30
      focus:border-blue-400/50 dark:focus:border-pink-400/50
      focus:outline-1 focus:outline-blue-400/30 dark:focus:outline-pink-400/30
      transition-all
      `}
      />
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
