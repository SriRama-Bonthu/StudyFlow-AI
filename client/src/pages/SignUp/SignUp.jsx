import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FiUser, FiMail, FiLock, FiZap, FiArrowLeft, FiAlertCircle } from "react-icons/fi";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        { name, email, password }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <Link to="/" className="back-home-btn glass-card">
        <FiArrowLeft />
        <span>Back to Home</span>
      </Link>

      <div className="auth-container glass-card">
        <div className="auth-left">
          <div>
            <div className="auth-badge">
              <FiZap />
              <span>Join StudyFlow AI</span>
            </div>
            <h1>Create Account</h1>
            <p>
              Start your smarter learning journey with AI-powered study tools and workspace productivity.
            </p>
          </div>
        </div>

        <div className="auth-right">
          <h2>Get Started</h2>
          <p className="auth-subtitle">Create your free StudyFlow AI account</p>

          {error && (
            <div className="error-alert">
              <FiAlertCircle />
              <span>{error}</span>
            </div>
          )}

          <form className="auth-form" onSubmit={handleSignup}>
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-field-wrapper">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <div className="input-field-wrapper">
                <FiMail className="input-icon" />
                <input
                  type="email"
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-field-wrapper">
                <FiLock className="input-icon" />
                <input
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <div className="input-field-wrapper">
                <FiLock className="input-icon" />
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button className="primary-btn auth-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;