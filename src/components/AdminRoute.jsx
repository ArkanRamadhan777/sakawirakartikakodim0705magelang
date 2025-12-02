import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { isAdmin } from '../config/adminConfig';

/**
 * Protected route component for admin pages
 * Redirects to home if user is not an admin
 */
const AdminRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();

    // Show loading state while checking auth
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg text-primary"></div>
                    <p className="mt-4 text-gray-600">Memuat...</p>
                </div>
            </div>
        );
    }

    // Redirect to login if not authenticated
    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }

    // Redirect to home if not admin
    if (!isAdmin(currentUser.email)) {
        return <Navigate to="/" replace />;
    }

    // Render children if admin
    return children;
};

export default AdminRoute;
