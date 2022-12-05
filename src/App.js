import { ThemeProvider } from "styled-components";

import { Issue, Service } from "./context";
import AppRouter from "./Router";
import { AxiosClient, createIssueService, URL } from "./service";
import { GlobalStyles, primaryTheme } from "./styles";

const client = new AxiosClient(URL.API);
const issueService = createIssueService(client);

function App() {
  return (
    <>
      <ThemeProvider theme={primaryTheme}>
        <GlobalStyles />
        <Service.Provider services={issueService}>
          <Issue.Provider>
            <AppRouter />
          </Issue.Provider>
        </Service.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
