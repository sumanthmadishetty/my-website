import React from "react";
import { calendar, mobileIcon, locationPin, envelope } from "assets/Images";

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

function PersonalDetails() {
  return (
    <div
      id="personal Details"
      style={{
        gridRow: "3/4",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        textAlign: "left"
      }}
      className="contactDetails"
    >
      {DATA.map(item => (
        <div key={item.title} style={{ display: "flex", margin: "8px" }}>
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
  );
}

export default PersonalDetails;
