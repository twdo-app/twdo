import { FiPlus } from "react-icons/fi";
import { useStore } from "../store/useStore";

import Clickable from "./common/Clickable";
import Icon from "./common/Icon";
import Title from "./common/Title";

export default function HeaderBar({ title }: { title: string }) {
  const addTask = useStore((state) => state.addTask);

  return (
    <header className="flex items-center justify-between w-full row-span-1 col-span-3 place-self-center">
      <Title>{title}</Title>
      <Clickable
        className="w-8 h-8 justify-center items-center"
        onClick={() => addTask("")}
        type="button"
      >
        <Icon icon={<FiPlus size="1.25rem" strokeWidth="3px" />} />
      </Clickable>
    </header>
  );
}
