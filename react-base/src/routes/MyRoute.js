import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function MyRoute() {
  const isLoggedIn = false;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
