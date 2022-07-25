import { Routes, Route, Link } from "react-router-dom";
import "./Pre.css";
import Home from "./Homme";
import About from "./About";
import Contact from "./Contact";
import Collection from "./Collection";

function App() {
  return (
    <>
      <div id="nav">
        <h2>
          <Link to="/" className="links">
            Home
          </Link>
        </h2>
        <h2>
          <Link to="/about" className="links">
            About
          </Link>
        </h2>
        <h2>
          <Link to="/contact" className="links">
            Contact
          </Link>
        </h2>
        <h2>
          <Link to="/collection" className="links">
            Collection
          </Link>
        </h2>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/collection" element={<Collection />} />
      </Routes>
    </>
  );
}

export default App;
