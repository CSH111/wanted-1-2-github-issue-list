import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import { IssuesProvider } from "./context/issuesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <IssuesProvider>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </IssuesProvider>
  // </React.StrictMode>
);
// https://shiny-parfait-47e153.netlify.app/
