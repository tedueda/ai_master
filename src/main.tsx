import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import BlogList from './pages/BlogList.tsx';
import BlogPost from './pages/BlogPost.tsx';
import Tokusho from './pages/Tokusho.tsx';
import Privacy from './pages/Privacy.tsx';
import Demo from './pages/Demo.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/demo-2" element={<Demo />} />
        <Route path="/tokusho" element={<Tokusho />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
