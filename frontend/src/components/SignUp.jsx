import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";

function Signup({ setCurrentPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const CAMPUS_DOMAIN = "@gec.ac.in"; // 🔥 change this to your campus domain

  const handleSignup = async () => {
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("All fields are required.");
      return;
    }

    // 🔥 Restrict to campus email only
    if (!email.toLowerCase().endsWith(CAMPUS_DOMAIN)) {
      setError(`Only ${CAMPUS_DOMAIN} email addresses are allowed.`);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account created successfully!");

      // App.jsx auth listener handles navigation

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        <div className="auth-form">

          <input
            type="email"
            placeholder={`Enter Campus Email (${CAMPUS_DOMAIN})`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />

          <button
            onClick={handleSignup}
            className="auth-btn"
            disabled={loading}
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          {error && <p className="auth-error">{error}</p>}

          <p className="auth-switch">
            Already have an account?
            <button
              className="auth-link"
              onClick={() => setCurrentPage("login")}
            >
              Login
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;
