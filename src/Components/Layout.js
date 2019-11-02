import React, { Children } from "react";
import { Grid } from "@material-ui/core";
import { Location } from "@reach/router";
const TopBar = React.lazy(() => import("../Containers/First"));
const Sidebar = React.lazy(() => import("./Sidebar"));

export default function Layout(props) {
  return (
    <Location>
      {({ location }) => {
        return (
          <div style={{ height: "100%" }}>
            <TopBar location={location} />
            <div id="asd">The next content goes herer</div>
            {/* <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 10fr",
                height: "100%"
              }}
            >
              <Sidebar location={location} />
              {props.children}
            </div> */}
          </div>
        );
      }}
    </Location>
  );
}

// <div style={{ display: "gird", gridTemplateRows: "100px auto" }}>
//   <div style={{ gridRow: "1" }}>
//     <TopBar />
//   </div>
//   <div style={{ gridRow: "2", display: "grid" }}>
//     <Sidebar />
//   </div>
//   <div>{props.children}</div>
// </div>
