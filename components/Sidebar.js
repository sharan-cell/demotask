import styles from '../styles/components/Sidebar.module.css';
import Hamburger from './Hamburger';

function Sidebar() {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
        <Hamburger/>
        <h3>D.E.M.O</h3>
    </div>
    <div className={styles.bottom}>
    <ul>
        <li>Home</li>
        <li>Project</li>
        <li>About</li>
        <li>Resume</li>
    </ul>

    </div>
    </div>
  )
}

export default Sidebar