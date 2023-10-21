import { Route, Routes } from "react-router-dom";
import Navabar from "./components/Navabar";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navabar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
