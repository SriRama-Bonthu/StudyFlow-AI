import "./Signup.css";

import {
  Link,
  useNavigate
} from "react-router-dom";

import { useState } from "react";

import axios from "axios";
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

  if(password !== confirmPassword){

    return setError("Passwords do not match");

  }

  try {

    setLoading(true);

    const response = await axios.post(

      `${import.meta.env.VITE_API_URL}/api/auth/register`,

      {
        name,
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

    navigate("/login");

  } catch (error) {

    setError(
      error.response?.data?.message ||
      "Signup failed"
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
              Join StudyFlow AI
            </div>

            <h1>
              Create Your Account
            </h1>

            <p>
              Start your smarter learning journey
              with AI-powered productivity tools.
            </p>

          </div>

        </div>

        <div className="auth-right">

          <h2>
            Sign Up
          </h2>

<form
  className="auth-form"
  onSubmit={handleSignup}
>
            <div className="input-group">

              <label>Full Name</label>

              <input
  type="text"
  placeholder="Enter your name"

  value={name}

  onChange={(e)=>
    setName(e.target.value)
  }
/>

            </div>

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
  placeholder="Create password"

  value={password}

  onChange={(e)=>
    setPassword(e.target.value)
  }
/>

            </div>

            <div className="input-group">

              <label>Confirm Password</label>

              <input
  type="password"
  placeholder="Confirm password"

  value={confirmPassword}

  onChange={(e)=>
    setConfirmPassword(e.target.value)
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

           <button
  className="primary-btn auth-btn"
  disabled={loading}
>

  {
    loading
    ? "Creating Account..."
    : "Create Account"
  }

</button>

          </form>

          <p className="auth-switch">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Signup;