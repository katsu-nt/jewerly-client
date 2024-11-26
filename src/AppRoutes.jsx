// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/authContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ClientLayout from './layouts/ClientLayout.jsx';
import AdminLayout from "./layouts/AdminLayout.jsx"
import HomePage from './pages/HomePage.jsx';
import ListProduct from './components/ListProduct.jsx';
import ManageOrderAdmin from './components/ManageOrderAdmin.jsx';
import ManageProductAdmin from './components/ManageProductAdmin.jsx';

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/trang-chu" element={<ClientLayout><HomePage /></ClientLayout>} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminLayout><ManageOrderAdmin /></AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <ClientLayout><HomePage /></ClientLayout>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/trang-chu"></Navigate>}></Route>

          <Route path="/vong-lac" element={<ClientLayout><ListProduct /></ClientLayout>} />

          <Route path="/quan-tri-danh-sach-san-pham" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminLayout>
                <ManageProductAdmin />
              </AdminLayout>
            </ProtectedRoute>
          } />

          <Route path="/quan-tri-don-hang" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminLayout>
                <ManageOrderAdmin />
              </AdminLayout>
            </ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to="/trang-chu"></Navigate>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
