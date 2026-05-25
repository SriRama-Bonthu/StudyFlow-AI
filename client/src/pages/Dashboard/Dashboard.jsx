import "./Dashboard.css";

import Sidebar from "../../components/Sidebar/Sidebar";

import Topbar from "../../components/Topbar/Topbar";

import {

  FiClock,
  FiZap,
  FiFileText,
  FiTarget,
  FiUpload,
  FiMessageSquare,

} from "react-icons/fi";

function Dashboard() {

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <div className="dashboard-container">

          {/* HERO SECTION */}

          <div className="dashboard-hero">

            <div>

              <h1>
                Welcome back 👋
              </h1>

              <p>
                Your AI-powered productivity workspace
                for smarter studying.
              </p>

            </div>

            {/* <button className="primary-btn">

              Upgrade Pro

            </button> */}

          </div>

          {/* STATS */}

          <div className="dashboard-grid">

            <div className="dashboard-card">

              <FiClock className="dashboard-icon" />

              <h2>12h</h2>

              <p>Study Hours</p>

            </div>

            <div className="dashboard-card">

              <FiZap className="dashboard-icon" />

              <h2>86%</h2>

              <p>Productivity</p>

            </div>

            <div className="dashboard-card">

              <FiFileText className="dashboard-icon" />

              <h2>24</h2>

              <p>AI Summaries</p>

            </div>

            <div className="dashboard-card">

              <FiTarget className="dashboard-icon" />

              <h2>92</h2>

              <p>Focus Score</p>

            </div>

          </div>

          {/* QUICK ACTIONS */}

          <div className="quick-actions">

            <h2>
              Quick Actions
            </h2>

            <div className="actions-grid">

              <div className="action-card">

                <FiUpload />

                <span>
                  Upload PDF
                </span>

              </div>

              <div className="action-card">

                <FiMessageSquare />

                <span>
                  Chat With PDF
                </span>

              </div>

              <div className="action-card">

                <FiZap />

                <span>
                  Generate Quiz
                </span>

              </div>

            </div>

          </div>

          {/* RECENT ACTIVITY */}

          <div className="recent-section">

            <h2>
              Recent Activity
            </h2>

            <div className="recent-card">

              <p>
                ✅ AI summary generated for React Notes
              </p>

              <span>
                2 mins ago
              </span>

            </div>

            <div className="recent-card">

              <p>
                📄 PDF uploaded successfully
              </p>

              <span>
                10 mins ago
              </span>

            </div>

            <div className="recent-card">

              <p>
                🤖 Quiz generated from DBMS notes
              </p>

              <span>
                25 mins ago
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;