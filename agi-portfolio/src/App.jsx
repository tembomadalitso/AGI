import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, Footer } from './components';
import { HomePage } from './pages/HomePage';
import { ScrollToTop } from './components/ScrollToTop';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen overflow-x-hidden bg-[rgb(var(--color-canvas))] text-[rgb(var(--color-ink))] transition-colors duration-500">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
