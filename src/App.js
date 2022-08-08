import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNavi from './Components/HeaderNavi/HeaderNavi';
import Home from './Pages/Home';
import Work from './Pages/Work';
import About from './Pages/About';
import Contact from './Pages/Contact'
import NotFoundPage from './Pages/NotFoundPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <HeaderNavi />
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
