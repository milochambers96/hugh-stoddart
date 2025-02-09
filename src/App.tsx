import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Layout/Navbar";
import ScrollToTop from "./components/Utility/ScrollToTop";
import Home from "./components/HomePage/Home";
import WritingsShell from "./components/WritingsPage/WritingsShell";
import ScreenplayShell from "./components/WritingsPage/Screenplays/ScreenplayShell";
import TheatreShell from "./components/WritingsPage/Theatre/TheatreShell";
import PrisonShell from "./components/WritingsPage/Prison/PrisonShell";
import AboutShell from "./components/AboutPage/AboutShell";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <div className="bg-hs-background h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Writings" element={<WritingsShell />} />
          <Route path="/Writings/Screenplays" element={<ScreenplayShell />} />
          <Route path="/Writings/Theatre" element={<TheatreShell />} />
          <Route path="/Writings/Prison" element={<PrisonShell />} />

          <Route path="/About" element={<AboutShell />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
