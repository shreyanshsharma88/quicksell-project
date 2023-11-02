import { useSearchParams } from "react-router-dom";
import { useTasksContext } from "../context/context";

export const useCardOptions = (field, value) => {
  const { tasks } = useTasksContext();
  const [sp] = useSearchParams();
  let tickets = [];

  switch (field) {
    case "priority":
      tickets = tasks?.tickets?.filter((t) => t.priority === value);
      break;
    case "user":
      tickets = tasks?.tickets?.filter((t) => t.userId === value);
      break;
    case "status":
      tickets = tasks?.tickets?.filter((t) => t.status === value);
      break;

    default:
      tickets = [];
  }

  if (sp.get("sortBy") === "priority") {
    tickets.sort((t1, t2) => t2.priority - t1.priority);
  } else if (sp.get("sortBy") === "title") {
    tickets.sort((t1, t2) => t2.title - t1.title);
  }

  return tickets;
};
