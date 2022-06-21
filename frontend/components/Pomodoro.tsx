import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useStore } from "../store/useStore";

export default function Pomodoro() {
  const pomodoroTaskDescription = useStore(
    (state) => state.pomodoroTaskDescription
  );

  return <h1>{pomodoroTaskDescription}</h1>;
}
