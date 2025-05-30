import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";

import Navbar from "./components/Layout/Navbar";
import ScrollToTop from "./components/Utility/ScrollToTop";
import Background from "./components/Layout/Background";
import Home from "./components/HomePage/Home";
import WritingsShell from "./components/WritingsPage/WritingsShell";
import ScreenplayShell from "./components/WritingsPage/Screenplays/ScreenplayShell";
import ScreenplayItemShell from "./components/WritingsPage/Screenplays/ScreenplayItemShell";
import TheatreShell from "./components/WritingsPage/Theatre/TheatreShell";
import ArtsShell from "./components/WritingsPage/Arts/ArtsShell";
import PrisonShell from "./components/WritingsPage/Prison/PrisonShell";
import AboutShell from "./components/AboutPage/AboutShell";
import ContactShell from "./components/ContactPage/ContactShell";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Background>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Writings" element={<WritingsShell />} />
            <Route path="/Writings/Screenplays" element={<ScreenplayShell />} />
            <Route
              path="/Writings/Screenplays/:id"
              element={<ScreenplayItemShell />}
            />
            <Route path="/Writings/Theatre" element={<TheatreShell />} />
            <Route path="/Writings/TheArts" element={<ArtsShell />} />

            <Route path="/Writings/Prison" element={<PrisonShell />} />

            <Route path="/About" element={<AboutShell />} />

            <Route path="/Contact" element={<ContactShell />} />
          </Routes>
        </Background>
      </Router>
    </HelmetProvider>
  );
}

export default App;
