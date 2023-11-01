import { createContext, useContext } from "react";

export const TasksContext = createContext({
  tasks: {},
  setTasks: () => {},
  setShowSortByOptions: false,
  showSortByOptions: () => {}
});
export const useTasksContext = () => useContext(TasksContext);
