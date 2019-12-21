import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import { techsophyLogo } from "assets/Images";

function Experience(props) {
  const [expanded, setExpanded] = React.useState("");
  return (
    <div
      style={{
        textAlign: "left",
        marginBottom: "150px"
      }}
      className="commonGridContainer"
    >
      <div className="commonGridWrapper">
        <h1>Experience</h1>
        <div>{renderDetails()}</div>
      </div>
    </div>
  );

  function renderDetails() {
    const onChangeSelectedPanel = id => {
      setExpanded(expanded => (expanded === id ? "" : id));
    };

    return (
      <div>
        <ExpansionPanel
          expanded={expanded === "asd"}
          onChange={() => onChangeSelectedPanel("asd")}
        >
          <ExpansionPanelSummary>
            <div
              style={{
                gridTemplateRows: "1fr 1fr",
                gridTemplateColumns: "1fr 4fr",
                display: "grid",
                gridGap: "10px"
              }}
            >
              <div style={{ gridRow: "1/3", gridColumn: "1" }}>
                <img
                  src={techsophyLogo}
                  alt="techsophyLogo"
                  className="companyLogo"
                />
              </div>
              {renderCompanyNameAndTenure()}
              {renderCompanyDescription()}
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CompanyExperience />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }

  function renderCompanyNameAndTenure() {
    return (
      <div
        style={{
          // justifyContent: "center",
          // alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gridRow: "1/2",
          gridColumn: "2"
        }}
      >
        <p className="companyName">Techsophy</p>
        <p className="companyTenure">May 2018 - Present</p>
      </div>
    );
  }
}

function renderCompanyDescription() {
  return (
    <div className="companyDescriptionText">
      Also, reporting it manually increases the cost and consumes a lot of time
      (which you can use for more important tasks). Most importantly, you
      wouldn’t want mistakes in your accounts. right? This is where artificial
      intelligence comes
    </div>
  );
}

function CompanyExperience() {
  return (
    <div style={{ width: "100%" }}>
      {/* <hr style={{ width: "100%" }}></hr> */}
      <a href="https://www.techsophy.com/" target="blank">
        <p
          style={{ fontStyle: "italic", fontWeight: "bold", fontSize: "18px" }}
        >
          Webiste
        </p>
      </a>
      <div>
        <h1>Projects worked on</h1>
        <div>
          <ProjectData />
        </div>
      </div>
    </div>
  );
}
const ABHIPAISA_TEXT =
  "Mobile app to get a loan in 30 minutes AbhiPaisa App is India's first mobile app that disburses short-term and flexible loans within minutes! The loans are powered by Dovefin Micro Finance Private Limited. With AbhiPaisa App, get instant cash in just a few steps! DoveFin Micro Finance Pvt.Ltd offers personal loans up to INR 1,00,000 to salaried individuals at a nominal interest rate which is much less than many banks in India.";

function ProjectData() {
  return (
    <div>
      <div>
        <a href="https://www.techsophy.com/" target="blank">
          <h2 className="projectName" style={{}}>
            Abhipaisa
          </h2>
        </a>
        <div className="projectData">
          <div className="projectDescription">{ABHIPAISA_TEXT}</div>
          <div style={{ margin: "10px 0px" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
