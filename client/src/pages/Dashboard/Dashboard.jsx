import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { Link } from "react-router-dom";
import {
  FiClock,
  FiZap,
  FiFileText,
  FiTarget,
  FiUploadCloud,
  FiMessageSquare,
  FiArrowRight,
  FiCheckCircle
} from "react-icons/fi";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar title="Dashboard" subtitle={`Welcome back, ${user?.name || "Student"} 👋`} />

        <div className="dashboard-container">
          {/* HERO BANNER */}
          <div className="dashboard-hero glass-card">
            <div className="hero-text-content">
              <span className="hero-tag">AI Powered Workspace</span>
              <h1>Welcome back 👋</h1>
              <p>
                Your AI-powered productivity workspace for smarter studying, faster PDF summaries, and instant quizzes.
              </p>
            </div>
            <Link to="/pdf-upload" className="primary-btn hero-action-btn">
              <span>Start Summarizing</span>
              <FiArrowRight />
            </Link>
          </div>

          {/* STATS GRID */}
          <div className="dashboard-grid">
            <div className="dashboard-card glass-card">
              <div className="card-icon-wrapper purple">
                <FiClock className="dashboard-icon" />
              </div>
              <div className="card-info">
                <h2>12h</h2>
                <p>Study Hours</p>
              </div>
            </div>

            <div className="dashboard-card glass-card">
              <div className="card-icon-wrapper cyan">
                <FiZap className="dashboard-icon" />
              </div>
              <div className="card-info">
                <h2>86%</h2>
                <p>Productivity</p>
              </div>
            </div>

            <div className="dashboard-card glass-card">
              <div className="card-icon-wrapper emerald">
                <FiFileText className="dashboard-icon" />
              </div>
              <div className="card-info">
                <h2>24</h2>
                <p>AI Summaries</p>
              </div>
            </div>

            <div className="dashboard-card glass-card">
              <div className="card-icon-wrapper amber">
                <FiTarget className="dashboard-icon" />
              </div>
              <div className="card-info">
                <h2>92</h2>
                <p>Focus Score</p>
              </div>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="actions-grid">
              <Link to="/pdf-upload" className="action-card glass-card">
                <div className="action-icon purple">
                  <FiUploadCloud />
                </div>
                <div className="action-details">
                  <h3>Upload PDF</h3>
                  <p>Generate summary & revision notes</p>
                </div>
              </Link>

              <Link to="/chat-pdf" className="action-card glass-card">
                <div className="action-icon cyan">
                  <FiMessageSquare />
                </div>
                <div className="action-details">
                  <h3>Chat With PDF</h3>
                  <p>Ask questions from study documents</p>
                </div>
              </Link>

              <Link to="/notes" className="action-card glass-card">
                <div className="action-icon emerald">
                  <FiZap />
                </div>
                <div className="action-details">
                  <h3>Generate Quiz</h3>
                  <p>Test your knowledge on notes</p>
                </div>
              </Link>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="recent-section">
            <h2>Recent Activity</h2>
            <div className="recent-list">
              <div className="recent-card glass-card">
                <div className="recent-left">
                  <FiCheckCircle className="recent-icon purple" />
                  <p>AI summary generated for React Notes</p>
                </div>
                <span className="recent-time">2 mins ago</span>
              </div>

              <div className="recent-card glass-card">
                <div className="recent-left">
                  <FiCheckCircle className="recent-icon cyan" />
                  <p>PDF uploaded successfully (DBMS_Module_1.pdf)</p>
                </div>
                <span className="recent-time">10 mins ago</span>
              </div>

              <div className="recent-card glass-card">
                <div className="recent-left">
                  <FiCheckCircle className="recent-icon emerald" />
                  <p>Quiz generated from Operating Systems notes</p>
                </div>
                <span className="recent-time">25 mins ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;