import React, {
  InputHTMLAttributes,
  LegacyRef,
  SelectHTMLAttributes,
} from "react";
import { FiArrowDown, FiChevronDown } from "react-icons/fi";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  value?: string;
  id?: string;
  name?: string;
  className?: string;
  children?: React.ReactNode;
}

const Dropdown = React.forwardRef(
  (
    {
      onChange,
      value,
      id,
      name,
      className,
      children,
      ...otherProps
    }: SelectProps,
    ref: LegacyRef<HTMLSelectElement> | undefined
  ) => {
    return (
      <div className="flex items-center relative w-full">
        <FiChevronDown className="absolute right-3 pointer-events-none" />
        <select
          {...otherProps}
          onChange={onChange}
          ref={ref}
          value={value}
          id={id}
          name={name}
          className={`
      ${className}
      flex items-center justify-between appearance-none
      w-full rounded-md px-3 py-2 outline-transparent border border-solid
      bg-slate-400/10 dark:bg-slate-600/10
      placeholder:text-slate-600/60 dark:placeholder:text-slate-400/60
      border-slate-400/30 dark:border-slate-600/30
      focus:border-blue-400/50 dark:focus:border-pink-400/50
      focus:outline-1 focus:outline-blue-400/30 dark:focus:outline-pink-400/30
      transition-all
      `}
        >
          {children}
        </select>
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";
export default Dropdown;
