import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from './store/UserStore';
import AppShell from './shared/AppShell';
import SignIn from './views/SignIn';
import Register from './views/Register';
import Overview from './views/Overview';
import ProjectList from './views/ProjectList';
import ProjectView from './views/ProjectView';

function PrivateRoute({ children }) {
  const { user, loading } = useUser();
  if (loading) return <div className="loading">Loading...</div>;
  return user ? children : <Navigate to="/login" />;
}

function PublicRoute({ children }) {
  const { user, loading } = useUser();
  if (loading) return <div className="loading">Loading...</div>;
  return !user ? children : <Navigate to="/" />;
}

export default function Main() {
  return (
    <Routes>
      <Route path="/login" element={<PublicRoute><SignIn /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
      <Route path="/" element={<PrivateRoute><AppShell><Overview /></AppShell></PrivateRoute>} />
      <Route path="/projects" element={<PrivateRoute><AppShell><ProjectList /></AppShell></PrivateRoute>} />
      <Route path="/projects/:id" element={<PrivateRoute><AppShell><ProjectView /></AppShell></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
