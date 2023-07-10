import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Quotes from './components/quotes';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="all-container1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quotes" element={<Quotes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
