import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import GithubIcon from "../assets/githubIcon.png";
import stackOverflow from "../assets/stackOverflow.png";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// This container should contain
// 1.Sidebar with links(Education, Projects, Contact me etc);
// 2. Topabr with Name, Github and stackoverflow links

const styles = {
  topbarContainer: {
    height: "100px",
    backgroundColor: "black",
    display: "flex",
    color: "white",
    width: "100%"
    // alignItems: "center"
    // justifyContent: "space-between"
  },
  topbarTitleStyles: { display: "grid", gridColumn: "1", fontSize: "20px" }
};

function TopBar() {
  return (
    <div>
      <div id="Topbar" style={styles.topbarContainer}>
        <div
          style={{
            fontSize: "50px",
            justifySelf: "center",
            alignSelf: "center",
            width: "100%"
          }}
        >
          Sumanth Madishetty
        </div>
        <div
          style={{
            float: "right",
            display: "flex",
            alignSelf: "center",
            marginRight: "15px"
          }}
        >
          <CustomIconButton icon={GithubIcon} />
          <CustomIconButton icon={stackOverflow} />
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

{
  /* <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "100%"
          }}
        >
          <div style={styles.topbarTitleStyles}>Sumanth Madishetty</div>

          <div style={{ display: "flex", gridColumn: "2" }}>
            <div>Github Link</div>
            <div>Stackoverflow Link</div>
          </div>
        </div> */
}
