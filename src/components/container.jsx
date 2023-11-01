import { useTasksContext } from "../context/context";
import { Card } from "./card";
import { Navbar, SortByOptions } from "./navbar";

export const Main = () => {
  const { showSortByOptions } = useTasksContext();
  return (
    <div style={{ backgroundColor: "#F4F5F8", height: "100vh", width: "100%" }}>
      <Navbar />
      <div style={{ position: "absolute", top: "8%", left: "3%" }}>
        {showSortByOptions && <SortByOptions />}
      </div>
      <Card/>
    </div>
  );
};
