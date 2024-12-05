import React from 'react';
import { motion } from 'framer-motion';

const Page4 = () => {
  return (
    <motion.div
      className="wrapper animated-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <img src="/Ellipse.png" 
            alt="Ellipse Background" 
            className="ellipse-img" />``
      <div className="bottom-element">
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="logo-img"
          initial={{ scale: 0.7 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <p >Continue With</p>
        <div className="social-buttons">
          <img src="/google.jpg" alt="Google" />
          <img src="/apple-mb.png" alt="Apple" />
          <img src="/fb.png" alt="Facebook" />
        </div>
        <p className="footer">@2024 TILO all rights reserved.</p>
        </div>
    </motion.div>
  );
};

export default Page4;