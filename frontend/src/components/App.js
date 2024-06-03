import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Scores from './Scores.js'; 
import Leagues from './Leagues.js'; 
import Scoreboard from './Livescore.js'; 
import Login from './Login.js';
import Register from './Register.js';
import News from './News.js';

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
