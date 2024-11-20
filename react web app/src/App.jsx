import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SecOne from './components/SecOne';

import Contact from './components/Contact_page1';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SecOne />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
