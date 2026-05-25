import "./Sidebar.css";

import {
  Link,
  useNavigate
} from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");
  };

  return (

    <div className="sidebar">

      <div classname="sidebar-top">

        <div className="sidebar-logo">
          StudyFlow AI
        </div>

        <div className="sidebar-links">

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/notes">
            Notes
          </Link>

          <Link to="/chat-pdf">
  Chat With PDF
</Link>

          <Link to="/ai-tools">
            AI Tools
          </Link>

          <Link to="/pdf-upload">
  PDF Summarizer
</Link>

          {/* <Link to="/analytics">
            Analytics
          </Link> */}

        </div>

      </div>

      <div className="sidebar-bottom">

        <div className="sidebar-user">

          <div className="user-avatar">
            {user?.name?.charAt(0)}
          </div>

          <div>

            <h4>{user?.name}</h4>

            <p>{user?.email}</p>

          </div>

        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>

  );
}

export default Sidebar;