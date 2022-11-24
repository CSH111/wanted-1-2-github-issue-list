import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Detail, Home } from "./pages";

function App() {
  // console.log(process.env.REACT_APP_API_KEY);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:issueNumber" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
