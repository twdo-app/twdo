import { task } from "../types";

export interface tasksState {
  tasks: task[];
}

const initialState = {
  tasks: [
    {
      id: "1",
      description: "task",
    },
    {
      id: "2",
      description: "task2",
    },
    {
      id: "3",
      description: "task2",
    },
  ],
};

type Action = {
  type: "ADD_TASK" | "REMOVE_TASK";
  payload: task;
};

export const tasksReducer = (
  state: tasksState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "REMOVE_TASK":
      console.log(state);
      return {
        ...state,
        tasks: [...state.tasks].filter((t) => t.id !== action.payload.id),
      };
    default:
      return state;
  }
};
