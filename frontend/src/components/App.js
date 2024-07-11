import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import Footer from './Footer/Footer.js';
import Page from './Content/Page.js';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import News from './News/News.js';


function App() {
    const currentLocation = useLocation();
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scorers" element={<Page type = {"Top Scorers"}/>} />
            <Route path="/standings" element={<Page type = {"League Standings"} />} />
            <Route path="/live" element={<Page type = {"Livescore"} />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/register" element = {<Register />} />
            <Route path="/news" element={<News />} />
        </Routes>
        {currentLocation.pathname === '/' && <Footer />}
        </BrowserRouter>
    );
}

export default App;
