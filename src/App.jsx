import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-gabarito">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
