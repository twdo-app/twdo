import { MouseEventHandler } from "react";
import { FiCheck } from "react-icons/fi";
import Icon from "./Icon";

export default function Checkbox({
  hidden,
  checked,
  onClick,
}: {
  hidden: boolean;
  checked: boolean;
  onClick: MouseEventHandler<any>;
}) {
  return (
    <div
      onClick={onClick}
      className={`${
        hidden && "translate-x-[-2rem] translate-y-[0.25rem] opacity-0"
      } p-1 mr-1 transition-all`}
    >
      <div
        className={`
        w-3 h-3 flex relative items-center justify-center
        rounded-[0.25rem] border border-solid
        border-fg
        transition-all
        ${
          checked &&
          `
            bg-primary border-primary-fg
          `
        }
      `}
      >
        <Icon
          icon={<FiCheck size="0.75rem" className="stroke-fgb" />}
          className={`${!checked && "hidden"}`}
        />
      </div>
    </div>
  );
}
