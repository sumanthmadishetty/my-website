import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SuspenseFallback from "./Components/SuspenseFallback";

const Layout = React.lazy(() => import("./Components/Layout"));

function App() {
  return (
    <React.Suspense fallback={<SuspenseFallback />}>
      <div className="App">
        <Layout>
          <div>ABout me</div>
        </Layout>
      </div>
    </React.Suspense>
  );
}

export default App;
