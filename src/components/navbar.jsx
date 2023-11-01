import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { AiOutlineDown } from "react-icons/ai";
import { useTasksContext } from "../context/context";
import { useSearchParams } from "react-router-dom";

export const SortByOptions = () => {
  const [sp, ssp] = useSearchParams();
  const handleChange = (event, parameter) => {
    const param = new URLSearchParams(sp);
    param.set(parameter, event.target.value);
    ssp(param);
    console.log(event.target.value);
  };
  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#F4F5F8",
        width: "300px",
        border: "1px grey",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        borderRadius: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ color: "#A8A8A9" }}>Grouping</div>
        <select
          value={sp.get("groupBy")}
          onChange={(e) => handleChange(e, "groupBy")}
          style={{
            width: "30%",
            padding: "5px",
            backgroundColor: "white",
            border: "1px solid #EBECEB",
          }}
        >
          <option  value="status">Status</option>
          <option  value="user">User</option>
          <option  value="prioity">Priority</option>
        </select>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ color: "#A8A8A9" }}>Ordering</div>
        <select
          value={sp.get("orderedBy")}
          style={{
            width: "30%",
            padding: "5px",
            backgroundColor: "white",
            border: "1px solid #EBECEB",
          }}
          onChange={(e) => handleChange(e, "orderedBy")}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};
export const Navbar = () => {
  const { tasks, setShowSortByOptions } = useTasksContext();
  console.log(tasks);
  return (
    <div style={{ padding: "25px", backgroundColor: "white" }}>
      <div
        onClick={() => setShowSortByOptions((p) => !p)}
        style={{
          padding: "10px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          display: "flex",
          justifyContent: "space-between",
          width: "150px",
          borderRadius: "10px",
        }}
      >
        <TbAdjustmentsHorizontal />
        <div style={{ fontWeight: 400 }}>Display</div>
        <AiOutlineDown />
      </div>
    </div>
  );
};
