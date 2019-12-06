import React, { Children } from "react";
import { Grid } from "@material-ui/core";
import { Location } from "@reach/router";
import {
  githubLogo,
  calendar,
  mobileIcon,
  locationPin,
  envelope,
  linkedinBlack,
  linkedinWhite
} from "assets/Images";
import translations from "config/translations";
import Fade from "react-reveal/Fade";

const TopBar = React.lazy(() => import("../Containers/First"));
const Sidebar = React.lazy(() => import("./Sidebar"));

const DATA = [
  {
    icon: envelope,
    title: "Email: ",
    value: "sumanth5812@gmail.com"
  },
  {
    icon: calendar,
    title: "Date of Birth: ",
    value: "21-08-1996"
  },
  {
    icon: locationPin,
    title: "Location: ",
    value: "Hyderbad, India"
  },
  {
    icon: mobileIcon,
    title: "Mobile: ",
    value: "+91-8099211177"
  }
];

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
      <Fade big cascade>
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

              display: "flex",
              flexDirection: "column"
              // justifyContent: "space-between"
              // gridTemplateRows: "1fr 2fr 2fr 1fr"
            }}
            className="flexBox"
          >
            <div
              style={{
                gridRow: "1/2",
                display: "flex",
                alignItems: "bottom"
              }}
            >
              <h1 style={{ margin: "0" }}>Hi there, I am Sumanth Madishetty</h1>
            </div>
            <div
              style={{
                gridRow: "2/3",
                display: "flex",
                alignItems: "left",
                textAlign: "left"
              }}
            >
              {translations.personalInfo}
            </div>
            <div
              id="personal Details"
              style={{
                gridRow: "3/4",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                textAlign: "left"
              }}
            >
              {DATA.map(item => (
                <div
                  key={item.title}
                  style={{ display: "flex", margin: "8px" }}
                >
                  <div>
                    <img
                      style={{ width: "15px", height: "15px" }}
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                  <div
                    style={{
                      fontWeight: "bolder",
                      marginRight: "10px",
                      marginLeft: "10px"
                    }}
                  >
                    {item.title}
                  </div>
                  <div>{item.value}</div>
                </div>
              ))}
            </div>
            <div id="social details" style={{ gridRow: "4/5" }}>
              <Fade big cascade>
                <SocialIcons
                  icon={linkedinWhite}
                  hoveredIcon={linkedinBlack}
                  href={translations.linkedinLink}
                />
              </Fade>
            </div>
          </div>

          <div style={{ display: "grid", gridColumn: "3/4" }}>
            <div id="skillsAtGlance">
              <div style={{ height: "5px", backgroundColor: "grey" }}>
                <div style={{ backgroundColor: "blue", width: "55%" }}></div>
              </div>
              <div style={{ height: "5px", backgroundColor: "grey" }}>
                React
              </div>
              <div style={{ height: "5px", backgroundColor: "grey" }}>
                React
              </div>
              <div style={{ height: "5px", backgroundColor: "grey" }}>
                React
              </div>
              <div style={{ height: "5px", backgroundColor: "grey" }}>
                React
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }

  function SocialIcons({ icon, hoveredIcon, href }) {
    const [isActive, setActive] = React.useState(false);
    return (
      <div
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        style={{ width: "45px" }}
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img
            style={{ width: "40px", height: "40px" }}
            src={isActive ? hoveredIcon : icon}
            alt="asd"
          />
        </a>
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
