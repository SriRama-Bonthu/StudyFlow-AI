import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiZap } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <FiZap className="logo-icon" />
          <span>StudyFlow AI</span>
        </Link>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            </li>
            <li>
              <a href="#preview" onClick={() => setMenuOpen(false)}>Workspace</a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a>
            </li>
          </ul>

          <div className="nav-buttons-mobile">
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="login-btn">Login</button>
            </Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              <button className="start-btn">Get Started</button>
            </Link>
          </div>
        </div>

        <div className="nav-actions-desktop">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="start-btn">Get Started</button>
          </Link>
        </div>

        <button 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;