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
        border-slate-400
        dark:border-slate-600
        transition-all
        ${
          checked &&
          `
            dark:bg-pink-400 dark:border-pink-400
            child-icon:dark:stroke-slate-900
            bg-blue-400 border-blue-400
            child-icon:stroke-slate-100
          `
        }
      `}
      >
        <Icon
          icon={<FiCheck size="0.75rem" stroke="#FFF" />}
          className={`${!checked && "hidden"}`}
        />
      </div>
    </div>
  );
}
