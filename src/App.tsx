import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skill from "./Components/Skill";

function App() {
  return (
    <Router>
      <div className="w-screen">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
