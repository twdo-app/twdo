import { useRouter } from "next/router";
import { useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useTasks } from "../store/useTasks";
import Task from "./Task";

export default function TaskView() {
  const tasksStore = useTasks((state) => state);
  const router = useRouter();
  const projectId = router.query["project"]?.[0];

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
            ? tasksStore.tasks.map((task, i) =>
                (projectId && task.projectId?.toString() === projectId) ||
                (!projectId && !task.projectId) ? (
                  <Task
                    task={task}
                    key={task.id}
                    index={i}
                    isTaskBeingEdited={task.id === tasksStore.taskBeingEdited}
                  />
                ) : null
              )
            : null}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
