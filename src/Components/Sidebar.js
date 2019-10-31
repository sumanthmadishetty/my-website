import React from "react";
import stackOverflow from "../assets/stackOverflow.png";
export default function Sidebar(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "15%",
        backgroundColor: "black",
        color: "white",
        height: "100%"
      }}
    >
      <SidebarItem icon={stackOverflow} title="About me" />
      <SidebarItem icon={stackOverflow} title="Education" />
      <SidebarItem icon={stackOverflow} title="Work" />
      <SidebarItem icon={stackOverflow} title="Contact Me" />
    </div>
  );
}

function SidebarItem({ icon, title }) {
  return (
    <div
      className="sideBarItemContainer"
      style={{ height: "50px", display: "flex" }}
    >
      <img style={{ width: "20px", height: "20px" }} src={icon} alt="title" />
      <div>{title}</div>
    </div>
  );
}
