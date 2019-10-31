import React, { Children } from "react";
import TopBar from "../Containers/First";
import Sidebar from "./Sidebar";

export default function Layout(props) {
  return (
    // <div style={{ display: "gird", gridTemplateRows: "100px auto" }}>
    //   <div style={{ gridRow: "1" }}>
    //     <TopBar />
    //   </div>
    //   <div style={{ gridRow: "2", display: "grid" }}>
    //     <Sidebar />
    //   </div>
    //   <div>{props.children}</div>
    // </div>
    <div style={{ height: "100%" }}>
      <TopBar />
      <Sidebar />
      {props.children}
    </div>
  );
}
