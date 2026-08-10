import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiFileText, 
  FiMessageSquare, 
  FiZap, 
  FiBarChart2, 
  FiCpu, 
  FiBookOpen
} from "react-icons/fi";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-badge">
            <FiZap />
            <span>AI Powered Student Workspace</span>
          </div>

          <h1>
            Study Smarter with <span>StudyFlow AI</span>
          </h1>

          <p>
            Organize notes, generate AI summaries, quiz yourself, track productivity,
            and interact with study PDFs in one intelligent workspace.
          </p>

          <div className="hero-buttons">
            <Link to="/signup">
              <button className="primary-btn hero-primary-btn">
                <span>Get Started Free</span>
                <FiArrowRight />
              </button>
            </Link>
            <button
              className="secondary-btn"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Features
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="floating-card card-one glass-card">
            <div className="card-header-icon purple">
              <FiFileText />
            </div>
            <h3>AI Summary</h3>
            <p>Chapters summarized into key revision bullet points.</p>
          </div>

          <div className="floating-card card-two glass-card">
            <div className="card-header-icon cyan">
              <FiBarChart2 />
            </div>
            <h3>Focus Score</h3>
            <p>Productivity increased by 32% this week.</p>
          </div>

          <div className="floating-card card-three glass-card">
            <div className="card-header-icon emerald">
              <FiZap />
            </div>
            <h3>Smart Revision</h3>
            <p>AI predicts key concepts to revise before exams.</p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="features-section">
        <div className="section-header">
          <span className="section-tag">Powerful Suite</span>
          <h2>AI Features Designed For Students</h2>
          <p>Smart tools built to optimize learning speed, exam prep, and revision efficiency.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon purple"><FiFileText /></div>
            <h3>PDF Summarizer</h3>
            <p>Upload study PDFs and instantly extract key definitions, formulas, and revision points.</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon cyan"><FiMessageSquare /></div>
            <h3>Chat With PDF</h3>
            <p>Ask complex questions directly from uploaded textbooks and receive instant AI answers.</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon emerald"><FiZap /></div>
            <h3>AI Quiz Generator</h3>
            <p>Generate targeted multiple-choice and short-answer practice quizzes automatically.</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon amber"><FiBarChart2 /></div>
            <h3>Study Dashboard</h3>
            <p>Track focus metrics, monitor study hours, and analyze progress visually.</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon blue"><FiCpu /></div>
            <h3>AI Tools Hub</h3>
            <p>Access top AI utilities including ChatGPT, Gemini, Claude, Perplexity, and Canva.</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon rose"><FiBookOpen /></div>
            <h3>Smart Notes</h3>
            <p>Organize chapter notes and store key takeaways with persistent AI enhancements.</p>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW SECTION */}
      <section id="preview" className="dashboard-preview">
        <div className="dashboard-left">
          <div className="preview-badge">Productivity Analytics</div>
          <h2>Your Complete AI Study Hub</h2>
          <p>
            Monitor study streaks, track your productivity metrics, and receive personalized AI recommendations to maintain peak focus.
          </p>

          <div className="preview-points">
            <div className="preview-item">
              <FiCheckCircle className="check-icon" />
              <span>Smart productivity & streak tracking</span>
            </div>
            <div className="preview-item">
              <FiCheckCircle className="check-icon" />
              <span>AI-powered study recommendations</span>
            </div>
            <div className="preview-item">
              <FiCheckCircle className="check-icon" />
              <span>Weekly analytics and focus insights</span>
            </div>
          </div>
        </div>

        <div className="dashboard-right">
          <div className="dashboard-mockup glass-card">
            <div className="mockup-header">
              <div className="mockup-circle red"></div>
              <div className="mockup-circle yellow"></div>
              <div className="mockup-circle green"></div>
            </div>

            <div className="mockup-content">
              <div className="mockup-sidebar">
                <div className="sidebar-item active"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
              </div>

              <div className="mockup-main">
                <div className="mockup-top-cards">
                  <div className="mini-card"></div>
                  <div className="mini-card"></div>
                </div>
                <div className="mockup-chart"></div>
                <div className="mockup-bottom">
                  <div className="bottom-card"></div>
                  <div className="bottom-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-header">
          <span className="section-tag">Student Feedback</span>
          <h2>Loved by Students Everywhere</h2>
          <p>Thousands of students rely on StudyFlow AI to study smarter and save time.</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card glass-card">
            <p>“StudyFlow AI completely transformed how I prepare for semester exams. The AI summaries save me hours of reading.”</p>
            <div className="testimonial-user">
              <div className="user-avatar">A</div>
              <div>
                <h4>Arjun Kumar</h4>
                <span>Engineering Student</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card glass-card">
            <p>“Chatting directly with my medical PDFs and generating quizzes on demand has doubled my retention rate.”</p>
            <div className="testimonial-user">
              <div className="user-avatar">S</div>
              <div>
                <h4>Sneha Reddy</h4>
                <span>Medical Student</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card glass-card">
            <p>“The study metrics and focus score tracking keep me accountable. It’s an essential tool for my prep.”</p>
            <div className="testimonial-user">
              <div className="user-avatar">R</div>
              <div>
                <h4>Rahul Sharma</h4>
                <span>UPSC Aspirant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-card glass-card">
          <h2>Start Your Smarter Learning Journey Today</h2>
          <p>Join StudyFlow AI and elevate your study performance with AI tools built for success.</p>
          <Link to="/signup">
            <button className="primary-btn cta-btn">
              <span>Get Started Free</span>
              <FiArrowRight />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;