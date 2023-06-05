import UserMenu from '@/component/dropdown';
import { AppContext } from '@/context/layoutContext';
import styles from '@/partials/layout/nav.module.css';
import { Input } from '@nextui-org/react';
import { useContext } from 'react';


const Dashboard_Nav = () => {
    const { showSidebar, updateMessage } = useContext(AppContext);
    const fun = () => {
         updateMessage(!showSidebar)
    }
    // console.log("navbar")
    return (
        <nav className={styles.header_con}>
            <header className={styles.header}>
                    <input type='text' placeholder='search' className={styles.search}/>
                <div className={styles.hamburger_menu} onClick={fun}>
                    <i className="fa-solid fa-bars fa-xl" style={{ color: "#9facbf",cursor: "pointer" }}></i>
                </div>
                <i className="fa-regular fa-bell" style={{ padding: "0 10px" }}></i>
                <UserMenu />
            </header>
        </nav>
    );
}

export default Dashboard_Nav;