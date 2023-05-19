import styles from '@/partials/layout/nav.module.css';
// import { Input } from '@nextui-org/react';

// import Link from 'next/link';


const Dashboard_Nav = () => {
    return (
        <nav className={styles.header_con}>
            <header className={styles.header}>
                <lable>
                    <input type='text' placeholder='search' />
                </lable>
                <i className="fa-regular fa-bell" style={{ padding: "0 10px" }}></i>
            </header>
            {/* <Input placeholder="Next UI" />; */}
        </nav>
    );
}

export default Dashboard_Nav;