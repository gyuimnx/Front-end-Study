import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './ch_02/Header';
import Clock from './ch_02/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=>{
  root.render(
    <>
      <Clock location="부산시"></Clock>
      <Clock location="서울시"></Clock>
    </>
  );
}, 1000)

