import React from "react";
import stackOverflow from "../assets/stackOverflow.png";
import ROUTES from "config/routes";
import { navigate } from "@reach/router";

export default function SidebarGroup(props) {
  debugger;
  return (
    <Sidebar location={props.location}>
      <Sidebar.Item
        icon={stackOverflow}
        title="About me"
        link={ROUTES.ABOUT_ME}
      />
      <Sidebar.Item
        icon={stackOverflow}
        title="Education"
        link={ROUTES.EDUCATION}
      />
      <Sidebar.Item icon={stackOverflow} title="Work" link={ROUTES.WORK} />
      <Sidebar.Item
        icon={stackOverflow}
        title="Contact Me"
        link={ROUTES.CONTACT_ME}
      />
    </Sidebar>
  );
}

Sidebar.Item = ({ icon, title, link, isSelected }) => {
  return (
    <div
      className={
        isSelected
          ? "sideBarItemContainer sideBarItemSelected"
          : "sideBarItemContainer"
      }
      style={{ height: "50px", display: "flex" }}
      onClick={() => navigate(link)}
    >
      <img style={{ width: "20px", height: "20px" }} src={icon} alt="title" />
      <div>{title}</div>
    </div>
  );
};

export function Sidebar({ children, location }) {
  debugger;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        color: "white",
        height: "100%"
      }}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          debugger;
          return React.cloneElement(child, {
            ...child.props,
            isSelected: location.pathname === child.props.link
          });
        }
        return null;
      })}
    </div>
  );
}
