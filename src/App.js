import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNavi from './Components/HeaderNavi/HeaderNavi';
import Home from './Pages/Home';
import Web from './Pages/Web';
import Games from './Pages/Games';
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
          <Route path='/web' element={<Web />} />
          <Route path='/games' element={<Games />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
