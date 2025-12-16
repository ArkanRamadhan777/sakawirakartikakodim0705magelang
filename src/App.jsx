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
import ArticleDetail from './pages/ArticleDetail';
import QuizPage from './pages/QuizPage';
import Gallery from './pages/Gallery';
import References from './pages/References';
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
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/quiz/:tkkId" element={<QuizPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
