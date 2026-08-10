import "./Sidebar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  FiGrid, 
  FiFileText, 
  FiMessageSquare, 
  FiCpu, 
  FiUploadCloud, 
  FiLogOut,
  FiX
} from "react-icons/fi";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggle-sidebar", handleToggle);
    return () => window.removeEventListener("toggle-sidebar", handleToggle);
  }, []);

  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <FiGrid /> },
    { path: "/notes", label: "AI Notes", icon: <FiFileText /> },
    { path: "/chat-pdf", label: "Chat With PDF", icon: <FiMessageSquare /> },
    { path: "/ai-tools", label: "AI Tools Hub", icon: <FiCpu /> },
    { path: "/pdf-upload", label: "PDF Summarizer", icon: <FiUploadCloud /> },
  ];

  return (
    <>
      {/* Backdrop overlay for mobile drawer */}
      {isOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={() => setIsOpen(false)} 
          aria-label="Close sidebar overlay"
        />
      )}

      <aside className={`sidebar ${isOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-top">
          <div className="sidebar-header">
            <Link to="/dashboard" className="sidebar-logo">
              <span className="logo-spark">✨</span> StudyFlow AI
            </Link>
            <button 
              className="sidebar-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FiX />
            </button>
          </div>

          <nav className="sidebar-links">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-user">
            <div className="user-avatar">
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="user-info">
              <h4>{user?.name || "Student User"}</h4>
              <p>{user?.email || "student@studyflow.ai"}</p>
            </div>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;