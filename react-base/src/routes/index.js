import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';

import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<MyRoute />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
