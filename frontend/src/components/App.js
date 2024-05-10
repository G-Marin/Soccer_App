import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Scores from './Scores'; 
import Leagues from './Leagues'; 
import Scoreboard from './Livescore'; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scorers" element={<Scores />} />
        <Route path="/standings" element={<Leagues />} />
        <Route path="/live" element={<Scoreboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
