import React from "react";
import { LinearProgress } from "@material-ui/core";
export default function SuspenseFallback(props) {
  return (
    <div
      style={{
        display: "grid",
        alignSelf: "center",
        alignItems: "center",
        height: "100%",
        paddingLeft: "15%",
        paddingRight: "15%"
      }}
    >
      <LinearProgress />
    </div>
  );
}
