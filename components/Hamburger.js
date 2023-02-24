

import styles from '../styles/components/Hamburger.module.css'
import { useState } from 'react';


const Hamburger = ({ openDrawer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  className={styles.hamburger} onClick={handleClick}  >
      <div onClick={openDrawer} className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></div>
      <div className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></div>
      <div className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></div>
    </div>
  );
};

export default Hamburger;