import { Droppable } from "react-beautiful-dnd";
import { FiPlay, FiSkipBack, FiSkipForward, FiX } from "react-icons/fi";
import { usePomodoro } from "../store/usePomodoro";
import Button from "./common/Button";
import Clickable from "./common/Clickable";
import Icon from "./common/Icon";

export default function Pomodoro() {
  const pomoStore = usePomodoro((state) => state);

  return (
    <Droppable droppableId="pomodoro">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`flex flex-col overflow-hidden items-center justify-center h-full w-full p-24`}
        >
          <h1>{pomoStore.pomodoroTaskDescription}</h1>
          <div
            className={`relative flex flex-col justify-center items-center transition-all overflow-hidden bg-blue-200/60 border-blue-300/60 dark:bg-pink-400/30 dark:border-pink-400/20 border-2 border-dashed rounded-md
            ${
              snapshot.isUsingPlaceholder
                ? "opacity-1 h-full w-full"
                : "opacity-0 h-3/4 w-3/4"
            }
            `}
          >
            <Clickable className="absolute right-8 top-8">
              <Icon icon={<FiX />} />
            </Clickable>
            <div className="flex gap-4 items-center justify-center">
              <Button icon={<Icon icon={<FiSkipBack />} />}></Button>
              <Button icon={<Icon icon={<FiPlay />} />}></Button>
              <Button icon={<Icon icon={<FiSkipForward />} />}></Button>
            </div>
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}
