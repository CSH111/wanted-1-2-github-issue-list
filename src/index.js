import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { Issue, Service } from "./context";
import AxiosClient from "./service/AxiosClient";
import { createIssueService } from "./service/IssueService";
import { URL } from "./service/URL";
import GlobalStyles from "./styles/GlobalStyles";
import primaryTheme from "./styles/primaryTheme";
const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new AxiosClient(URL.API);
const issueService = createIssueService(client);

root.render(
  // <React.StrictMode>
  <ThemeProvider theme={primaryTheme}>
    <Service.Provider services={issueService}>
      <Issue.Provider>
        <GlobalStyles />
        <Router>
          <App />
        </Router>
      </Issue.Provider>
    </Service.Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
// https://chosungho-react-issues.netlify.app/
