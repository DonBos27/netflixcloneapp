import { Route, Routes } from "react-router-dom";
import Navabar from "./components/Navabar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Navabar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
