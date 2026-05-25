import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        StudyFlow AI
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#">Features</a>
        </li>

        <li>
          <a href="#">Workspace</a>
        </li>

        <li>
          <a href="#">Community</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>

      </ul>

      <div className="nav-buttons">

        <Link to="/login">
  <button className="login-btn">
    Login
  </button>
</Link>

        <Link to="/signup">
  <button className="start-btn">
    Get Started
  </button>
</Link>

      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  );
}

export default Navbar;