import React from 'react';
import { motion } from 'framer-motion';

const Page7 = () => {
  return (
    <motion.div
      className="wrapper animated-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Ellipse Background */}
      <img
        src="/Ellipselow.png"
        alt="Ellipse Background"
        className="ellipselow-img"
      />

      {/* Top Icons */}
      <div className="myTop">
        <img src="/clock.png" alt="Clock Icon" className="icon1" />
        <img src="/profile.png" alt="Profile Icon" className="icon1" />
      </div>

      {/* Logo */}
      <div className="bottom-element">
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="logo-img"
          initial={{ scale: 0.7 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>

      {/* Popup */}
      <div className="popup-container">
        <img src="/popup.png" alt="Popup Background" className="popup-img" />
        <span className="popup-text">Tap the logo to view features</span>
        <img src="/close.png" alt="Close Icon" className="close-icon" />
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-box-wrapper">
          <input
            type="text"
            className="searchbox"
            placeholder="You can type here or speak"
          />
          <img src="/mic-icon.png" alt="Mic Icon" className="mic-icon" />
        </div>
      </div>
    </motion.div>
  );
};

export default Page7;
