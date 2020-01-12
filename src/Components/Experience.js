import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import {
  techsophyLogo,
  abhipaisaLogo,
  fanduniyaLogo,
  tahakomLogo,
  bmsLogo
} from "assets/Images";

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
        <a
          style={{ width: "max-content", textDecoration: "none" }}
          href="https://www.techsophy.com/"
          target="blank"
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "50px",
              color: "#292961"
            }}
          >
            Techsophy
          </p>
        </a>
        <p className="companyTenure">May 2018 - Present</p>
      </div>
    );
  }
}

function renderCompanyDescription() {
  return (
    <div className="companyDescriptionText">
      Techsophy is a research consulting and product development company with
      innovation, technology and engineering as the core.
    </div>
  );
}

function CompanyExperience() {
  return (
    <div style={{ width: "100%" }}>
      {/* <hr style={{ width: "100%" }}></hr> */}
      {/* <a href="https://www.techsophy.com/" target="blank">
        
          Webiste
        </p>
      </a> */}
      <div>
        <h1>Projects worked on</h1>
        <div>
          <ProjectData
            websiteLink={"https://www.abhipaisa.com/"}
            logo={abhipaisaLogo}
            text={ABHIPAISA_TEXT}
            name="abhipaisa"
          />
          <ProjectData
            websiteLink={"https://www.fanduniya.com/"}
            logo={fanduniyaLogo}
            text={FANDUNIYA_TEXT}
            name="fanduniya"
          />
          <ProjectData
            websiteLink={"#"}
            logo={tahakomLogo}
            text={TASHIR_TEXT}
            name="tahakom"
          />
          <ProjectData
            websiteLink={"https://www.visionplanner.com/"}
            logo={bmsLogo}
            text={BMS_TEXT}
            name="bms"
          />
        </div>
      </div>
    </div>
  );
}
const ABHIPAISA_TEXT =
  " Abhipaisa is a mobile app to get a loan in 30 minutes AbhiPaisa App is India's first mobile app that disburses short-term and flexible loans within minutes! The loans are powered by Dovefin Micro Finance Private Limited. With AbhiPaisa App, get instant cash in just a few steps! DoveFin Micro Finance Pvt.Ltd offers personal loans up to INR 1,00,000 to salaried individuals at a nominal interest rate which is much less than many banks in India.";

const FANDUNIYA_TEXT =
  "A mobile app which suggests teams for Dream11 contests It is a must-have tool for fantasy sports players in India. It provides fantasy cricket players with the widest news coverage, sophisticated tools, and relevant analysis, created by the brightest minds in technology and cricket. It's primary goal is to help our users win and become champions at Dream11, and nothing makes us happier than seeing users win";

const TASHIR_TEXT =
  "Tashir is a Web Application that provides Visa(Immigration) services for Saudi Arabia.";

const BMS_TEXT =
  "Vision planner Benchmarking system is system that provides benchmark reports for various organisations and it hosts many other things";

function ProjectData({ websiteLink, logo, text, name }) {
  return (
    <div style={{ marginTop: "60px", marginBottom: "60px" }}>
      <div>
        {/* <a href="https://www.abhipaisa.com/" target="blank">
          <h2 className="projectName" style={{ margin: "10px 0px" }}>
            Abhipaisa
          </h2>
        </a> */}
        <div className="projectData">
          <a href={websiteLink} target="blank">
            <img src={logo} alt={name} />
          </a>
          <div className="projectDescription">{text}</div>
          <div style={{ margin: "10px 0px" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
