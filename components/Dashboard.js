import Home from './Home';
import styles from '../styles/components/Dashboard.module.css';
import Hamburger from './Hamburger';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ContactForm from './Contact_form';

function Dashboard() {
  return (
    <div className={styles.container}>
   <Navbar/>
    <Home/>
    <ContactForm/>
    </div>
  )
}

export default Dashboard