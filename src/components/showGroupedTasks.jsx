import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { useViewPort } from "../utils/useViewPort";
import { Card } from "./card";

export const GroupedTasks = (options) => {
    const {isMobile} = useViewPort()
  return (
    <div
      style={{
        display: isMobile ? "grid" : "flex",
        justifyContent: "space-between",
        padding: 30,
        minHeight: "120vh",
      }}
    >
      {options.options?.map((item) => (
        <div
          style={{ display: "grid", flex: 1, maxHeight: isMobile ? 'none' : 90, gap: 20 }}
          key={item?.label}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              {item?.icon}
              <div>{item?.label}</div>
              <div>{item?.value?.length}</div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <AiOutlinePlus />
              <BsThreeDots />
            </div>
          </div>
          <div style={{ display: "grid", gap: 15, flex: 1, padding:7 }}>
            {item?.value?.map((task) => (
              <Card key={task?.id} ticket={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
