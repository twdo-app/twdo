import { Droppable } from "react-beautiful-dnd";
import { usePomodoro } from "../store/usePomodoro";

export default function Pomodoro() {
  const pomodoroTaskDescription = usePomodoro(
    (state) => state.pomodoroTaskDescription
  );

  return (
    <Droppable droppableId="pomodoro">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="shrink h-full w-full"
        >
          <h1>hehehehe {pomodoroTaskDescription}</h1>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
