"use client"
import React from 'react';
import {Routes, Route ,BrowserRouter} from 'react-router-dom';

// import Navbar from './Components/Navbar';
import Home from './Home';

const Page = () => {
  return (
      <>
        {/* <Navbar /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

          </Routes>
        </BrowserRouter>
        
      </>
  );
};

export default Page;