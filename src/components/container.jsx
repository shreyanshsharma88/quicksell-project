import { AiFillCheckCircle, AiFillProject } from "react-icons/ai";
import { BiInfoSquare } from "react-icons/bi";
import { BsSkipBackwardCircleFill, BsThreeDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdCancel, MdPending } from "react-icons/md";
import { LuSignalLow, LuSignalMedium } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";
import { useTasksContext } from "../context/context";
import { useCardOptions } from "../utils/makeCardValues";
import { Navbar, SortByOptions } from "./navbar";
import { GroupedTasks } from "./showGroupedTasks";

export const Main = () => {
  const { showSortByOptions } = useTasksContext();
  const [sp] = useSearchParams();
  const priorityOptions = [
    {
      label: "Urgent",
      value: useCardOptions("priority", 1),
      icon: <BiInfoSquare />,
    },
    {
      label: "High",
      value: useCardOptions("priority", 2),
      icon: <LuSignalMedium />,
    },
    {
      label: "Medium",
      value: useCardOptions("priority", 3),
      icon: <LuSignalMedium />,
    },
    {
      label: "Low",
      value: useCardOptions("priority", 4),
      icon: <LuSignalLow />,
    },
    {
      label: "No Priority",
      value: useCardOptions("priority", 0),
      icon: <BsThreeDots />,
    },
  ];
  // const userOptions = [...new Set(tasks.users?.map((user) => ({
  //   label: user.name,
  //   value: useCardOptions('user', user.name)
  // })];
  const userOptions = [
    {
      label: "Anoop sharma",
      value: useCardOptions("user", "usr-1"),
      icon: <CgProfile />,
    },
    {
      label: "Yogesh",
      value: useCardOptions("user", "usr-2"),
      icon: <CgProfile />,
    },
    {
      label: "Shankar Kumar",
      value: useCardOptions("user", "usr-3"),
      icon: <CgProfile />,
    },
    {
      label: "Ramesh",
      value: useCardOptions("user", "usr-4"),
      icon: <CgProfile />,
    },
    {
      label: "Suresh",
      value: useCardOptions("user", "usr-5"),
      icon: <CgProfile />,
    },
  ];
  const statusOptions = [
    {
      label: "Todo",
      value: useCardOptions("status", "Todo"),
      icon: <MdPending />,
    },
    {
      label: "In Progress",
      value: useCardOptions("status", "In progress"),
      icon: <AiFillProject />,
    },
    {
      label: "Backlog",
      value: useCardOptions("status", "Backlog"),
      icon: <BsSkipBackwardCircleFill />,
    },
    {
      label: "Done",
      value: useCardOptions("status", "Done"),
      icon: <AiFillCheckCircle />,
    },
    {
      label: "Cancelled",
      value: useCardOptions("status", "Cancelled"),
      icon: <MdCancel />,
    },
  ];
  // const statusOptions = [...new Set(tasks.tickets?.map((t) => t.status))];
  return (
    <div style={{ backgroundColor: "#F4F5F8", width: "100%" }}>
      <Navbar />
      <div style={{ position: "absolute", top: "8%", left: "3%" }}>
        {showSortByOptions && <SortByOptions />}
      </div>
      {/* <Card /> */}
      <div style={{ width: "100%", overflow: "scroll" }}>
        <GroupedTasks
          options={
            sp?.get("groupBy") === "status"
              ? statusOptions
              : sp?.get("groupBy") === "user"
              ? userOptions
              : priorityOptions
          }
        />
      </div>
    </div>
  );
};
