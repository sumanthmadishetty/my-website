import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { linkedinBlack, linkedinWhite } from "assets/Images";
import translations from "config/translations";

function SocialIcons() {
  return (
    <div id="social details" style={{ gridRow: "4/5" }}>
      <Fade big cascade>
        <SocialIcon
          icon={linkedinWhite}
          hoveredIcon={linkedinBlack}
          href={translations.linkedinLink}
        />
      </Fade>
    </div>
  );
}

function SocialIcon({ icon, hoveredIcon, href }) {
  const [isActive, setActive] = useState(false);
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

export default SocialIcons;
