import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

// List admin emails - bisa dipindah ke Firestore nanti
const ADMIN_EMAILS = [
  'fastforreflek@gmail.com',
  'fadlinabilaazka@gmail.com',
  // Tambah email admin baru di sini
];

export const AdminProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      // Check if user email is in admin list
      const adminStatus = ADMIN_EMAILS.includes(currentUser.email);
      setIsAdmin(adminStatus);
    } else {
      setIsAdmin(false);
    }
    setLoading(false);
  }, [currentUser]);

  const value = {
    isAdmin,
    loading
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
