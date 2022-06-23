import { Droppable } from "react-beautiful-dnd";
import { usePomodoro } from "../store/usePomodoro";

export default function Pomodoro() {
  const pomoStore = usePomodoro((state) => state);

  return (
    <Droppable droppableId="pomodoro">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`relative flex flex-col items-center justify-center h-full w-full p-8`}
        >
          <h1 className="absolute">{pomoStore.pomodoroTaskDescription}</h1>
          <div
            className={`transition-all w-full h-full bg-blue-200/60 border-2 border-dashed border-blue-300/60 rounded-md
            opacity-${snapshot.isUsingPlaceholder ? "1" : "0"}
            `}
          >
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}
