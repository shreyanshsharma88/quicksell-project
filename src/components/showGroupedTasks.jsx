import { useSearchParams } from "react-router-dom";
import { Card } from "./card";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export const GroupedTasks = (options) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 30, minHeight:'120vh' }}
    >
      {options.options?.map((item) => (
        <div style={{ display: "grid", flex: 1 , maxHeight:60}} key={item?.label}>
          <div style={{ display: "flex", justifyContent: "space-between" , padding:10}}>
            <div style={{ display: "flex", gap: 10 }}>
              <BsThreeDots />
              <div>{item?.label}</div>
              <div>{item?.value?.length}</div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <AiOutlinePlus />
              <BsThreeDots />
            </div>
          </div>
          <div style={{display:'grid' , gap:15}}>
            {item?.value?.map((task) => (
              <Card key={task?.id} ticket={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
