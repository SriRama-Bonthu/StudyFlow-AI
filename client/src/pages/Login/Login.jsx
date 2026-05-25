import "./Login.css";

import {
  Link,
  useNavigate
} from "react-router-dom";

import { useState } from "react";

import axios from "axios";
function Login() {
const navigate = useNavigate();

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");
const handleLogin = async (e) => {

  e.preventDefault();

  setError("");

  try {

    setLoading(true);

    const response = await axios.post(

      `${import.meta.env.VITE_API_URL}/api/auth/login`,

      {
        email,
        password,
      }

    );

    localStorage.setItem(
      "token",
      response.data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    navigate("/dashboard");

  } catch (error) {

    setError(
      error.response?.data?.message ||
      "Login failed"
    );

  } finally {

    setLoading(false);

  }

};
  return (

    <div className="auth-page">

      <div className="auth-container glass-card">

        <div className="auth-left">

          <div>

            <div className="auth-badge">
              StudyFlow AI
            </div>

            <h1>
              Welcome Back
            </h1>

            <p>
              Continue your smarter learning journey
              with AI-powered productivity tools.
            </p>

          </div>

        </div>

        <div className="auth-right">

          <h2>
            Login
          </h2>

<form
  className="auth-form"
  onSubmit={handleLogin}
>
            <div className="input-group">

              <label>Email Address</label>

              <input
  type="email"
  placeholder="Enter your email"

  value={email}

  onChange={(e)=>
    setEmail(e.target.value)
  }
/>

            </div>

            <div className="input-group">

              <label>Password</label>

              <input
  type="password"
  placeholder="Enter your password"

  value={password}

  onChange={(e)=>
    setPassword(e.target.value)
  }
/>

            </div>

            {
  error && (
    <p className="error-message">
      {error}
    </p>
  )
}

            <div className="forgot-password">
              Forgot Password?
            </div>

            <button
  className="primary-btn auth-btn"
  disabled={loading}
>

  {
    loading
    ? "Logging In..."
    : "Login"
  }

</button>

          </form>

          <p className="auth-switch">

            Don’t have an account?

            <Link to="/signup">
              Sign Up
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;