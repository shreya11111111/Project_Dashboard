import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-page">
      {/* Left panel */}
      <div className="signin-left">
        <div className="signin-left-content">
          <div className="signin-brand">ProjeX</div>
          <h2 className="signin-tagline">Ship projects.<br />Not excuses.</h2>
          <p className="signin-sub">The all-in-one workspace for modern teams to plan, track, and deliver.</p>
          <div className="signin-features">
            <div className="signin-feature"><span className="signin-feature-dot dot-violet"></span>Real-time task tracking</div>
            <div className="signin-feature"><span className="signin-feature-dot dot-cyan"></span>Role-based access control</div>
            <div className="signin-feature"><span className="signin-feature-dot dot-pink"></span>Team collaboration</div>
          </div>
        </div>
        <div className="signin-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>

      {/* Right panel */}
      <div className="signin-right">
        <div className="signin-form-wrap">
          <div className="signin-eyebrow">Welcome back</div>
          <h1 className="signin-title">Sign in to your account</h1>
          <p className="signin-hint">Don't have an account? <Link to="/register">Create one free →</Link></p>

          {error && <div className="error-msg">{error}</div>}

          <form onSubmit={handleSubmit} className="signin-form">
            <div className="signin-field">
              <label>Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>
            <div className="signin-field">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>
            <button type="submit" className="signin-btn" disabled={loading}>
              {loading ? <span className="signin-spinner"></span> : null}
              {loading ? 'Signing in...' : 'Continue →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

