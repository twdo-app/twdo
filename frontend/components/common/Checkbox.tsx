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
    <div onClick={onClick} className={`${hidden && "hidden"} p-1 mr-2`}>
      <div
        className={`
        w-3 h-3 flex relative items-center justify-center
        rounded-[0.25rem] border border-solid
        border-slate-400
        dark:border-slate-600
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
          icon={<FiCheck size="0.75rem" />}
          className={`${!checked && "hidden"}`}
        />
      </div>
    </div>
  );
}
