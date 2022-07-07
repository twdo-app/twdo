import { MouseEventHandler } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "./common/Button";
import Icon from "./common/Icon";
import Title from "./common/Title";
import Weather from "./Weather";

export default function HeaderBar({
  title,
  showTemperature,
  showAddButton,
  onAddButtonClick,
}: {
  title: string;
  showTemperature?: boolean;
  showAddButton?: boolean;
  onAddButtonClick?: MouseEventHandler<any>;
}) {
  return (
    <header className="flex items-center justify-between w-full row-span-1 col-span-3 place-self-center">
      <div className="w-full flex flex-col">
        <Title>{title}</Title>
        <p className="text-fg flex gap-1 h-5 text-sm">
          {showTemperature ? <Weather /> : null}
        </p>
      </div>
      {showAddButton ? (
        <Button
          onClick={onAddButtonClick}
          icon={<Icon icon={<FiPlus />} />}
          theme="text"
        ></Button>
      ) : null}
    </header>
  );
}
