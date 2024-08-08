import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './CardGame/App_page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './CardGame/Home.js';
import GameRule from './CardGame/GameRule.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/rules" element={<GameRule />} />
    </Routes>
  </BrowserRouter>
);