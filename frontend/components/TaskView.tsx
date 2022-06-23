import { Droppable } from "react-beautiful-dnd";
import { useTasks } from "../store/useTasks";
import Task from "./Task";

export default function TaskView() {
  const tasks = useTasks((state) => state.tasks);

  return (
    <Droppable droppableId="todo-list">
      {(provided, snapshot) => (
        <ul
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="shrink w-full"
        >
          {tasks?.map((task, i) => (
            <Task
              description={task.description}
              id={task.id}
              key={task.id}
              index={i}
            />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
