import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Krida from './pages/Krida';
import KridaDetail from './pages/KridaDetail';
import TkkDetail from './pages/TkkDetail';
import QuizPage from './pages/QuizPage';
import ArticleDetail from './pages/ArticleDetail';
import Gallery from './pages/Gallery';
import References from './pages/References';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import QuizHistory from './pages/QuizHistory';
import LeaderboardTabs from './pages/LeaderboardTabs';
import AdminDashboard from './pages/AdminDashboard';
import ArticleManagement from './pages/ArticleManagement';
import ArticleEditorPage from './pages/ArticleEditorPage';
import MigrationTools from './pages/MigrationTools';
import AnnouncementManagement from './pages/AnnouncementManagement';
import AnnouncementEditor from './pages/AnnouncementEditor';
import AnnouncementDetail from './pages/AnnouncementDetail';
import AchievementsPage from './pages/AchievementsPage';
import BookmarksPage from './pages/BookmarksPage';
import AdminRoute from './components/AdminRoute';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-gabarito">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#1f2937',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            padding: '16px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/krida" element={<Krida />} />
          <Route path="/krida/:id" element={<KridaDetail />} />
          <Route path="/tkk/:id" element={<TkkDetail />} />
          <Route path="/quiz/:tkkId" element={<QuizPage />} />
          <Route path="/article/:articleId" element={<ArticleDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/referensi" element={<References />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<QuizHistory />} />
          <Route path="/leaderboard" element={<LeaderboardTabs />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/articles" element={<AdminRoute><ArticleManagement /></AdminRoute>} />
          <Route path="/admin/article/new" element={<AdminRoute><ArticleEditorPage /></AdminRoute>} />
          <Route path="/admin/article/edit/:id" element={<AdminRoute><ArticleEditorPage /></AdminRoute>} />
          <Route path="/admin/migration" element={<AdminRoute><MigrationTools /></AdminRoute>} />
          <Route path="/admin/announcements" element={<AdminRoute><AnnouncementManagement /></AdminRoute>} />
          <Route path="/admin/announcement/new" element={<AdminRoute><AnnouncementEditor /></AdminRoute>} />
          <Route path="/admin/announcement/edit/:id" element={<AdminRoute><AnnouncementEditor /></AdminRoute>} />
          <Route path="/announcement/:id" element={<AnnouncementDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
