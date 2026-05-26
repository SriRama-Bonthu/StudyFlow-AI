import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
        <Navbar />
      <section className="hero-section">

  <div className="hero-left">

    <div className="hero-badge">
      AI Powered Student Workspace
    </div>

    <h1>
      Study Smarter with <span>StudyFlow AI</span>
    </h1>

    <p>
      Organize notes, learn with AI, track productivity,
      and collaborate with students in one intelligent workspace.
    </p>

    <div className="hero-buttons">
    <Link to="/signup">
      <button className="primary-btn">
        Get Started
      </button>
</Link>
<Link to="/features-grid">
      <button className="secondary-btn">
        Explore Features
      </button>
</Link>
    </div>

  </div>

  <div className="hero-right">

    <div className="floating-card card-one glass-card">
      <h3>AI Summary</h3>
      <p>
        Your chapter summarized into quick revision notes.
      </p>
    </div>

    <div className="floating-card card-two glass-card">
      <h3>Focus Score</h3>
      <p>
        Productivity increased by 32% this week.
      </p>
    </div>

    <div className="floating-card card-three glass-card">
      <h3>Smart Revision</h3>
      <p>
        AI predicts topics you may forget tomorrow.
      </p>
    </div>

  </div>

</section>
<section className="features-section">

  <div className="section-header">

    <h2>
      Powerful Features Built for Students
    </h2>

    <p>
      Everything you need to study smarter,
      stay productive, and learn efficiently.
    </p>

  </div>

  <div className="features-grid">

    <div className="feature-card glass-card">

      <div className="feature-icon">
        🤖
      </div>

      <h3>AI Summaries</h3>

      <p>
        Generate quick revision notes from long chapters instantly.
      </p>

    </div>

    <div className="feature-card glass-card">

      <div className="feature-icon">
        📚
      </div>

      <h3>Smart PDF Learning</h3>

      <p>
        Upload PDFs and interact with AI for explanations and quizzes.
      </p>

    </div>

    <div className="feature-card glass-card">

      <div className="feature-icon">
        ⏳
      </div>

      <h3>Focus Rooms</h3>

      <p>
        Study with realtime Pomodoro rooms and productivity tracking.
      </p>

    </div>

    <div className="feature-card glass-card">

      <div className="feature-icon">
        📈
      </div>

      <h3>Analytics Dashboard</h3>

      <p>
        Visualize study consistency, focus score, and learning trends.
      </p>

    </div>

    <div className="feature-card glass-card">

      <div className="feature-icon">
        🧠
      </div>

      <h3>Smart Revision</h3>

      <p>
        AI predicts topics you may forget and schedules revision.
      </p>

    </div>

    <div className="feature-card glass-card">

      <div className="feature-icon">
        🌍
      </div>

      <h3>Student Community</h3>

      <p>
        Collaborate, discuss doubts, and learn together with peers.
      </p>

    </div>

  </div>

</section>

<section className="dashboard-preview">

  <div className="dashboard-left">

    <div className="preview-badge">
      Productivity Analytics
    </div>

    <h2>
      Your Complete AI Study Dashboard
    </h2>

    <p>
      Track productivity, monitor study streaks,
      visualize focus levels, and get AI-powered
      learning recommendations in one place.
    </p>

    <div className="preview-points">

      <div className="preview-item">
        ✅ Smart productivity tracking
      </div>

      <div className="preview-item">
        ✅ AI-powered recommendations
      </div>

      <div className="preview-item">
        ✅ Weekly study analytics
      </div>

      <div className="preview-item">
        ✅ Focus score insights
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
<section className="testimonials-section">

  <div className="section-header">

    <h2>
      Loved by Students Everywhere
    </h2>

    <p>
      Thousands of students use StudyFlow AI
      to stay productive and study smarter.
    </p>

  </div>

  <div className="testimonials-grid">

    <div className="testimonial-card glass-card">

      <p>
        “StudyFlow AI completely changed how I prepare for exams.
        The AI summaries save so much time.”
      </p>

      <div className="testimonial-user">

        <div className="user-avatar">
          A
        </div>

        <div>
          <h4>Arjun Kumar</h4>
          <span>Engineering Student</span>
        </div>

      </div>

    </div>

    <div className="testimonial-card glass-card">

      <p>
        “The focus rooms and productivity analytics helped me
        improve my consistency dramatically.”
      </p>

      <div className="testimonial-user">

        <div className="user-avatar">
          S
        </div>

        <div>
          <h4>Sneha Reddy</h4>
          <span>Medical Student</span>
        </div>

      </div>

    </div>

    <div className="testimonial-card glass-card">

      <p>
        “Uploading PDFs and instantly generating quizzes
        is honestly my favorite feature.”
      </p>

      <div className="testimonial-user">

        <div className="user-avatar">
          R
        </div>

        <div>
          <h4>Rahul Sharma</h4>
          <span>UPSC Aspirant</span>
        </div>

      </div>

    </div>

  </div>

</section>
<section className="cta-section">

  <div className="cta-card glass-card">

    <h2>
      Start Your Smarter Learning Journey Today
    </h2>

    <p>
      Join StudyFlow AI and transform the way you learn,
      revise, and stay productive.
    </p>

    <button className="primary-btn">
      Get Started Free
    </button>

  </div>

</section>


    </div>
  );
}

export default LandingPage;