import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { stackoverflowLogo, githubLogo, mainBackground } from "assets/Images";

// import NotificationsIcon from "@material-ui/icons/Notifications";
// This container should contain
// 1.Sidebar with links(Education, Projects, Contact me etc);
// 2. Topabr with Name, Github and stackoverflow links

const styles = {
  topbarContainer: {
    backgroundImage: `url(${mainBackground})`,
    // display: "flex",
    width: "100%",
    height: "100%"
    // alignItems: "center"
    // justifyContent: "space-between"
  },
  topbarTitleStyles: { display: "grid", gridColumn: "1", fontSize: "20px" }
};

function TopBar() {
  return (
    // <div>
    <div id="Topbar" style={styles.topbarContainer} className="topBarContainer">
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          height: "100%",
          display: "grid",
          gridTemplateRows: "100px auto"
        }}
      >
        <div
          style={{
            float: "right",
            display: "flex",
            justifySelf: "right",
            gridRow: "1"
          }}
        >
          <CustomIconButton icon={githubLogo} />
          <CustomIconButton icon={stackoverflowLogo} />
        </div>
        <div
          style={{
            fontSize: "50px",
            justifySelf: "center",
            alignSelf: "center",
            width: "100%",
            gridRow: "2"
          }}
        >
          {/* {renderPersonalImage()} */}
          <div
            style={{ display: "flex", flexDirection: "column", color: "white" }}
          >
            <div
              id="titleHeaidng"
              style={{ fontSize: "35px" }}
            >{`Hie & Welcome`}</div>
            <div
              id="titleHeaidng"
              style={{ fontSize: "55px", fontWeight: "bolder" }}
            >
              I am Sumanth Madishetty
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomIconButton({ icon, onClick }) {
  return (
    <div>
      <IconButton onClick={onClick}>
        <img
          style={{ width: "50px", height: "50px" }}
          src={icon}
          alt="githublogo"
        />
      </IconButton>
    </div>
  );
}

export default TopBar;

// /* <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             height: "100%"
//           }}
//         >
//           <div style={styles.topbarTitleStyles}>Sumanth Madishetty</div>

//           <div style={{ display: "flex", gridColumn: "2" }}>
//             <div>Github Link</div>
//             <div>Stackoverflow Link</div>
//           </div>
//         </div> */

// function renderPersonalImage() {
//   return (
//     <div
//       style={{
//         borderRadius: "100px",
//         width: "120px",
//         height: "120px",
//         backgroundColor: "white",
//         display: "inline-flex",
//         justifyContent: "center",
//         alignItems: "center"
//       }}
//     >
//       <img
//         style={{ width: "110px", height: "110px", borderRadius: "100px" }}
//         src={author}
//         alt="myPhot"
//       />
//     </div>
//   );
// }
