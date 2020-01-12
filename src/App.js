import React from "react";
import "./App.css";
import SuspenseFallback from "./Components/SuspenseFallback";
import { Router } from "@reach/router";
const Layout = React.lazy(() => import("./Components/Layout"));

// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

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
