import React from "react";
import "./App.css";
import SuspenseFallback from "./Components/SuspenseFallback";
import { Router } from "@reach/router";
const Layout = React.lazy(() => import("./Components/Layout"));

const AboutMe = props => {
  return <div>Aboute me page</div>;
};

const Cheeppanu = props => {
  return <div>Cheeppanu</div>;
};

const NotFound = props => {
  return (
    <div className="notFoundContainer">Oops Page Under Construction!!</div>
  );
};

function App() {
  return (
    <React.Suspense fallback={<SuspenseFallback />}>
      <div className="App">
        <Layout>
          <Router primary={false}>
            <AboutMe path="/" />
            <Cheeppanu path="/education" />
            <NotFound default />
          </Router>
        </Layout>
      </div>
    </React.Suspense>
  );
}

export default App;
