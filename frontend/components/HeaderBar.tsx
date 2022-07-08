import { MouseEventHandler } from "react";
import { FiEdit, FiPenTool, FiPlus } from "react-icons/fi";
import Button from "./common/Button";
import Icon from "./common/Icon";
import Title from "./common/Title";
import Weather from "./Weather";

export default function HeaderBar({
  title,
  showTemperature,
  showAddButton,
  showEditButton,
  onAddButtonClick,
  onEditButtonClick,
}: {
  title: string;
  showTemperature?: boolean;
  showAddButton?: boolean;
  showEditButton?: boolean;
  onAddButtonClick?: MouseEventHandler<any>;
  onEditButtonClick?: MouseEventHandler<any>;
}) {
  return (
    <header className="flex items-center justify-between w-full row-span-1 col-span-3 place-self-center">
      <div className="w-full flex flex-col">
        <Title>{title}</Title>
        <p className="text-fg flex gap-1 h-5 text-sm">
          {showTemperature ? <Weather /> : null}
        </p>
      </div>
      {showEditButton ? (
        <Button
          className="mr-2"
          onClick={onEditButtonClick}
          icon={<Icon icon={<FiEdit />} />}
          theme="text"
        ></Button>
      ) : null}
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
