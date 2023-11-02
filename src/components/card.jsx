import { CgProfile } from "react-icons/cg";
import { BiSolidInfoSquare } from "react-icons/bi";
import { useViewPort } from "../utils/useViewPort";
import { values } from "pdf-lib";

export const Card = (ticket) => {
  const { isMobile } = useViewPort();
  return (
    <div
      style={{
        width: "330px",
        backgroundColor: "white",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding: "16px",
        display: "grid",
        gap: "10px",
        borderRadius: "15PX",
        height:'150px'
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#6A6E75",
        }}
      >
        <div>{ticket?.ticket?.id}</div>
        <CgProfile style={{ height: "30px", width: "30px" }} />
      </div>
      <div>{ticket?.ticket?.title}</div>
      <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
        <div
          style={{
            border: "1px solid #F1F3F5",
            borderRadius: "5px",
            padding: 4,
          }}
        >
          <BiSolidInfoSquare
            style={{
              color: "#6B6F76",
              borderRadius: 15,
              height: "25px",
              width: "25px",
            }}
          />
        </div>
        <div
          style={{
            border: "1px solid #F1F3F5",
            borderRadius: "5px",
            padding: 4,
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#BEC2C8",
              height: "20px",
              width: "20px",
              borderRadius: "100%",
            }}
          ></div>
          <div style={{ height: "25px", color: "#6D7177" }}>
            {ticket?.ticket?.tag?.map((t) => t)}
          </div>
        </div>
      </div>
    </div>
  );
};
