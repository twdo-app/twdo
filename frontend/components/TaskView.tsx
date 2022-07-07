import { useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useTasks } from "../store/useTasks";
import Task from "./Task";

export default function TaskView() {
  const tasksStore = useTasks((state) => state);

  useEffect(() => {
    tasksStore.updateTasks();
  }, []);

  return (
    <Droppable droppableId="todo-list">
      {(provided) => (
        <ul
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`shrink w-full bg-card overflow-hidden`}
        >
          {tasksStore.tasks
            ? tasksStore.tasks.map((task, i) => (
                <Task
                  task={task}
                  key={task.id}
                  index={i}
                  isTaskBeingEdited={task.id === tasksStore.taskBeingEdited}
                />
              ))
            : null}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
