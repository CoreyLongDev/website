import React from 'react';
import './App.css';
import HeaderNavi from './Components/HeaderNavi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Work from './Pages/Work';
import About from './Pages/About';
import Contact from './Pages/Contact'
import NotFoundPage from './Pages/NotFoundPage';

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
    </>
  );
}

export default App;
