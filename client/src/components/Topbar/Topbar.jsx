import "./Topbar.css";
import { FiMenu, FiZap } from "react-icons/fi";

function Topbar({ title = "Dashboard", subtitle = "Welcome back to StudyFlow AI" }) {
  const toggleMobileSidebar = () => {
    window.dispatchEvent(new Event("toggle-sidebar"));
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button 
          className="mobile-toggle-btn" 
          onClick={toggleMobileSidebar} 
          aria-label="Toggle navigation menu"
        >
          <FiMenu />
        </button>

        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="topbar-right">
        <div className="status-badge">
          <span className="status-dot"></span>
          <FiZap className="sparkle-icon" />
          <span>AI Active</span>
        </div>

        <div className="topbar-user-badge">
          <div className="topbar-avatar">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;