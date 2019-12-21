module.exports = {
  mainContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 3fr 1fr",
    paddingTop: "20px",
    paddingBottom: "20px",
    height: "300px",
    gridGap: "25px"
  },
  flexWrapper: {
    gridColumn: "2/3",
    height: "300px",

    display: "flex",
    flexDirection: "column"
    // justifyContent: "space-between"
    // gridTemplateRows: "1fr 2fr 2fr 1fr"
  },
  headingContainer: {
    gridRow: "1/2",
    display: "flex",
    alignItems: "bottom"
  },
  personalInfoContainer: {
    gridRow: "2/3",
    display: "flex",
    alignItems: "left",
    textAlign: "left"
  }
};
