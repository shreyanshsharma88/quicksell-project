import { useSearchParams } from "react-router-dom";
import { useTasksContext } from "../context/context";
import { useCardOptions } from "../utils/makeCardValues";
import { Card } from "./card";
import { Navbar, SortByOptions } from "./navbar";
import { GroupedTasks } from "./showGroupedTasks";

export const Main = () => {
  const { showSortByOptions, tasks } = useTasksContext();
  const [sp] = useSearchParams();
  const priorityOptions = [
    { label: "No Priority", value: useCardOptions("priority", 0) },
    { label: "Urgent", value: useCardOptions("priority", 1) },
    { label: "High", value: useCardOptions("priority", 2) },
    { label: "Medium", value: useCardOptions("priority", 3) },
    { label: "Low", value: useCardOptions("priority", 4) },
  ];
  // const userOptions = [...new Set(tasks.users?.map((user) => ({
  //   label: user.name,
  //   value: useCardOptions('user', user.name)
  // })];
  const userOptions = [
    { label: "Anoop sharma", value: useCardOptions("user", "usr-1") },
    { label: "Yogesh", value: useCardOptions("user", "usr-2") },
    { label: "Shankar Kumar", value: useCardOptions("user", "usr-3") },
    { label: "Ramesh", value: useCardOptions("user", "usr-4") },
    { label: "Suresh", value: useCardOptions("user", "usr-5") },
  ];
  const statusOptions = [
    {label:'Todo' , value:useCardOptions('status', 'Todo')},
    {label:'In Progress' , value:useCardOptions('status', 'In progress')},
    {label:'Backlog' , value:useCardOptions('status', 'Backlog')},
  ];
  // const statusOptions = [...new Set(tasks.tickets?.map((t) => t.status))];
  return (
    <div style={{ backgroundColor: "#F4F5F8",  width: "100%" }}>
      <Navbar />
      <div style={{ position: "absolute", top: "8%", left: "3%" }}>
        {showSortByOptions && <SortByOptions />}
      </div>
      {/* <Card /> */}
      <GroupedTasks
        options={
          sp.get("groupBy") === "status"
            ? statusOptions
            : sp.get("groupBy") === "user"
            ? userOptions
            : priorityOptions
        }
      />
    </div>
  );
};
