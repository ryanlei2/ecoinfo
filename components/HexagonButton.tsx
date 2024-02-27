// HexagonButton.js
import React, { useEffect, useState } from 'react';
import styles from '../styles/HexagonButton.module.css'; // Import CSS module for styling

const HexagonButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 200); // Change '200' to the scroll position where you want the button to appear
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <div className={isVisible ? styles.show : styles.hide} onClick={scrollToTop}>
        <div className={styles.hexagonButton}>
          <div className={styles.arrow}></div>
        </div>
      </div>
    );
  };
  
  export default HexagonButton;