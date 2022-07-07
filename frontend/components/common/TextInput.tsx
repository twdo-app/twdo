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
      w-full rounded-full px-4 py-2 border border-solid text-fg
      placeholder:text-input-border
      bg-input-bg
      border-input-border
      focus:border-primary
      transition-colors
      `}
      />
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
