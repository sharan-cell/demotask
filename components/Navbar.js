import styles from '../styles/components/Navbar.module.css';
import Hamburger from './Hamburger';
import  { useState } from 'react';
import Drawer from './Drawer';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };



  return (
    <div className={styles.container} >
    <div className={styles.left}>
      <div className={styles.menu} onClick={toggleDrawer}>
        <Hamburger  />
      </div>
      
        <h3>D.E.M.O</h3>
         {isDrawerOpen && <Drawer isOpen={isDrawerOpen} />}
       
    </div> 
    <div className={styles.right}>
        <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Resume</li>
        </ul>

    </div>
    
    </div>
  )
}

export default Navbar