import React, { Children } from "react";
import { Grid } from "@material-ui/core";
import { Location } from "@reach/router";
import GithubIcon from "../assets/githubIcon.png";

const TopBar = React.lazy(() => import("../Containers/First"));
const Sidebar = React.lazy(() => import("./Sidebar"));

export default function Layout(props) {
  return (
    <Location>
      {({ location }) => {
        return (
          <>
            <div style={{ height: "100%" }}>
              <TopBar location={location} />
            </div>
            <div id="asd">{renderMore()}</div>
          </>
        );
      }}
    </Location>
  );

  function renderMore() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr 3fr 1fr",
          paddingTop: "20px",
          paddingBottom: "20px",
          height: "400px"
        }}
      >
        <div
          style={{
            gridColumn: "2/3",
            height: "400px",

            display: "grid",
            gridTemplateRows: "2fr 3fr 2fr 1fr"
          }}
        >
          <div
            style={{
              gridRow: "1/2",
              display: "flex",
              alignItems: "center"
            }}
          >
            <h1>Hi there, I am Sumanth Madishetty</h1>
          </div>
          <div style={{ gridRow: "2/3" }}>
            I am a professional web designer from Manchester, England. I create
            beautiful professional websites using best practice accessibility. I
            enjoy turning complex problems into simple, beautiful and intuitive
            interface designs
          </div>
          <div id="personal Details" style={{ gridRow: "3/4" }}>
            Email: Sumanth5812@gmail.com Email: Sumanth5812@gmail.com Email:
            Sumanth5812@gmail.com Email: Sumanth5812@gmail.com
          </div>
          <div id="social details" style={{ gridRow: "4/5" }}>
            <img src={GithubIcon} alt="asd" />
            <img src={GithubIcon} alt="asd" />
            <img src={GithubIcon} alt="asd" />
            <img src={GithubIcon} alt="asd" />
          </div>
        </div>

        <div style={{ display: "grid", gridColumn: "3/4" }}>
          <div id="skillsAtGlance">
            <div style={{ height: "5px", backgroundColor: "grey" }}>
              <div style={{ backgroundColor: "blue", width: "55%" }}></div>
            </div>
            <div style={{ height: "5px", backgroundColor: "grey" }}>React</div>
            <div style={{ height: "5px", backgroundColor: "grey" }}>React</div>
            <div style={{ height: "5px", backgroundColor: "grey" }}>React</div>
            <div style={{ height: "5px", backgroundColor: "grey" }}>React</div>
          </div>
        </div>
      </div>
    );
  }
}

// <div style={{ display: "gird", gridTemplateRows: "100px auto" }}>
//   <div style={{ grid192.168.4.101ow: "1" }}>
//     <TopBar />
//   </div>
//   <div style={{ grid192.168.4.101ow: "2", display: "grid" }}>
//     <Sidebar />
//   </div>
//   <div>{props.children}</div>
// </div>
