import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import { Issue, Service } from "./context";
import AxiosClient from "./service/AxiosClient";
import { createIssueService, IssueService } from "./service/IssueService";
import { URL } from "./service/URL";

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new AxiosClient(URL.api);
// const issueService = new IssueService(client);
const issueService = createIssueService(client);

root.render(
  // <React.StrictMode>
  <Service.Provider services={issueService}>
    <Issue.Provider>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </Issue.Provider>
  </Service.Provider>
  // </React.StrictMode>
);
// https://shiny-parfait-47e153.netlify.app/
