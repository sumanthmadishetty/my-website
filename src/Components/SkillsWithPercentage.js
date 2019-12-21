import React from "react";

const SKILLS_GLANCE_TITLE = "50px";

function SkillsSection() {
  return (
    <div
      style={{
        display: "grid",
        gridColumn: "3/3",
        gridTemplateRows: `${SKILLS_GLANCE_TITLE} auto`
      }}
      className="skillsContainer"
    >
      <h1
        style={{
          gridRow: "1",
          color: "black",
          margin: "0px",
          textAlign: "left"
        }}
      >
        Skills
      </h1>
      <div id="skillsAtGlance" style={{ display: "grid", gridRow: "2/3" }}>
        <SkillsWithPercentage title={"Javascript"} percentage="55%" />
        <SkillsWithPercentage title={"React"} percentage="80%" />
        <SkillsWithPercentage title={"Ruby on Rails"} percentage="60%" />
        <SkillsWithPercentage title={"Java"} percentage="40%" />
      </div>
    </div>
  );
}

function SkillsWithPercentage({ title, percentage }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          textAlign: "left",
          fontSize: "20px",
          marginRight: "15px",
          minWidth: "120px"
        }}
      >
        {title}
      </div>
      <div
        style={{
          height: "5px",
          backgroundColor: "grey",
          width: "100%",
          borderRadius: "15px"
        }}
      >
        <div
          style={{
            backgroundColor: "lightblue",
            width: percentage,
            height: "5px"
          }}
        ></div>
      </div>
      <b style={{ marginLeft: "10px" }}>{percentage}</b>
    </div>
  );
}

export default SkillsSection;
