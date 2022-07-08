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
      w-full rounded-xl px-4 py-2 outline-transparent bg-input-bg
      focus:outline-1 focus:outline-primary-border
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
