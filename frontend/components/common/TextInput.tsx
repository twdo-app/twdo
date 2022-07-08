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
      w-full rounded-md px-3 py-2 text-fg
      placeholder:text-input-border
      border
      border-solid
      border-input-border
      outline-none
      focus:border-primary
      bg-bg
      transition-colors
      `}
      />
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
