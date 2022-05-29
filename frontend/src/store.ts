import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./reducers/tasksReducer";

export const store = configureStore({ reducer: tasksReducer });
