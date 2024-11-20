import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../style/header.css';
import Contact from './Contact_page1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Header = () => {
  return (
    <>
     
      <nav>
        <div className="logo"></div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">About us</a></li>
          {/* Update this to use Link for React Router navigation */}
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </>
  );
}; 

export default Header;
