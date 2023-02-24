
import styles from '../styles/components/Drawer.module.css';

const Drawer = ({ isOpen }) => {
  return (
    <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
     
      <ul>
        <li>Products</li>
        <li>Services</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Drawer;