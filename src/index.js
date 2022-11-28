import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import { Issue, Service } from "./context";
import AxiosClient from "./service/AxiosClient";
import { createIssueService } from "./service/IssueService";
import { URL } from "./service/URL";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new AxiosClient(URL.API);
const issueService = createIssueService(client);
console.log(process.env.REACT_APP_API_KEY);
root.render(
  // <React.StrictMode>
  <Service.Provider services={issueService}>
    <Issue.Provider>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </Issue.Provider>
  </Service.Provider>
  // </React.StrictMode>
);
// https://shiny-parfait-47e153.netlify.app/
