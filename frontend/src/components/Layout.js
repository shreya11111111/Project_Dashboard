import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../context/AuthContext';

export default function Layout({ children }) {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <span className="topbar-logo">ProjeX</span>
        <nav className="topbar-nav">
          <NavLink to="/" className={({ isActive }) => `topbar-link ${isActive ? 'active' : ''}`} end>
            ▦ Dashboard
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `topbar-link ${isActive ? 'active' : ''}`}>
            ◫ Projects
          </NavLink>
        </nav>
        <div className="topbar-right">
          <div style={{ textAlign: 'right' }}>
            <div className="topbar-user-name">{user?.name}</div>
            <div className="topbar-user-role">{user?.role}</div>
          </div>
          <div className="topbar-avatar">{user?.name?.charAt(0).toUpperCase()}</div>
          <button className="btn btn-secondary btn-sm" onClick={handleLogout}>Sign out</button>
        </div>
      </header>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

