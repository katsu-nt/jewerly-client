// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { AuthProvider } from './context/authContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import LoginPage from './pages/LoginPage.jsx';
import LogoutButton from './components/LogoutButton.jsx';
import ClientLayout from './layouts/ClientLayout.jsx';
import AdminLayout from "./layouts/AdminLayout.jsx"
import HomePage from './pages/HomePage.jsx';

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ClientLayout><HomePage/></ClientLayout>} />
          <Route path="/login" element={<ClientLayout><LoginPage/></ClientLayout>} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminLayout><HomePage/></AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles={['user']}>
               <ClientLayout><HomePage/></ClientLayout>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
