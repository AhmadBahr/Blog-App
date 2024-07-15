import React from 'react';
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt="Blog App Logo"/>
      <span>Blog App</span>
    </footer>
  );
};

export default Footer;
