import UserMenu from '@/component/dropdown';
import styles from '@/partials/layout/nav.module.css';


const Dashboard_Nav = () => {
    return (
        <nav className={styles.header_con}>
            <header className={styles.header}>
                <lable>
                    <input type='text' placeholder='search' />
                </lable>
                <div className={styles.hamburger_menu} onClick={() =>console.log("helo")}>
                    <i className="fa-solid fa-bars fa-xl" style={{ color: "#9facbf" }}></i>
                </div>
                <i className="fa-regular fa-bell" style={{ padding: "0 10px" }}></i>
                <UserMenu />
            </header>
        </nav>
    );
}

export default Dashboard_Nav;