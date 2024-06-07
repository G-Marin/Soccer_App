import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import Footer from './Footer/Footer.js';
import Scores from './Scores/Scores.js'; 
import Leagues from './Leagues/Leagues.js'; 
import Scoreboard from './Livescore/Livescore.js'; 
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import News from './News/News.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scorers" element={<Scores />} />
        <Route path="/standings" element={<Leagues />} />
        <Route path="/live" element={<Scoreboard />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
