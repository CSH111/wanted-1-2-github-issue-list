import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Detail, Home } from "./pages";

function App() {
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
